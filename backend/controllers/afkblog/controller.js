const afkBlog = require('../../models/afkblog');

const controller = {};


controller.index=(req,res)
  console.log('hit controller');
  afkBlog
    .findAll()
    .then((response)=>{
      console.log(response);
      res.json(response);
    });
  }

  controller.create = (req, res) =>{
    console.log("controller.create", req.body);
    const body = req.body;
    const Post = body.post;
    const featured_image = body.featured_image;
    const image1 = body.image1;
    const image2 = body.image2;
    const image3 = body.image3;
    const contents = body.contents;

    afkBlog
      .create(post, featured_image, image1, image2, image3)
      .then((data)=>{
        console.log(data);
        res.json(data);
      })
      .catch(err=> console.log('Error', err));
  };

  controller.destroy = (req, res)=>{
    console.log("destroy ===> ", req.body);
    const id = req.body.id;

    afkBlog
    .destroy(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log("err", err));
  }


  module.exports = controller;
