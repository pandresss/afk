import React, { Component } from 'react';
import '../../build/style.css';
import Post from './Post';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class BlogPosts extends Component {
   constructor(){
    super();
    this.state ={
      posts: null,
      currentPost: null
    }
  }

  componentDidMount(){
    this.getPosts();
  }

  getPosts(){
    Axios.get('put the posts here')
      .then((response) => {
        this.setState(() => {
          return { posts: response }
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  selectPost(post){
    this.setState({
      currentPost: post
    });
  }

// rendering them in key value form
  renderPosts(){
    if(this.state.posts){
      return this.state.posts.data.map((posts, index) => {
        return <Post key={index} posts={posts} selectPost={this.selectPost.bind(this)}/>
      })
    }
  }

  render() {
    return (
      <div className="blogPosts">
        <div className="currentPost">
          <Post post={this.state.currentPost}/>
        </div>
        <div className="posts">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

export default BlogPosts;
