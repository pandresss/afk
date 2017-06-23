import React, { Component } from 'react';
import '../../build/style.css';

const Post = (props) => {
console.log(props.current)
  return(
    <div className="post">
      <h3>{props.current.post}</h3>
      <img src={props.current.featured_image}/>
      <img src={props.current.image1}/>
      <img src={props.current.image2}/>
      <img src={props.current.image3}/>
      <p>{props.current.contents}</p>
    </div>
   )
}

export default Post;
