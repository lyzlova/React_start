import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post
          alt="nature"
          src="https://st2.depositphotos.com/5371668/8408/i/450/depositphotos_84086784-stock-photo-man-and-the-universe.jpg"
        />
      </div>
    );
  }
}
