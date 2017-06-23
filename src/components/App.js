import React, { Component } from 'react';
import '../../build/style.css';
// import Navbar from './Navbar';

class App extends Component{
  constructor(){
    super();
    this.state ={
      posts: null,
      current: null
    }
  }

  render(){
    return(
      <div className="app">
        <h3> Test </h3>
        <div className="currentPost"> Current post</div>
        <div className="posts"> list of posts</div>
      </div>
      )
  }
}

export default App;
