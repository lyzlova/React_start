import React, { Component } from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Posts extends Component {
  Instaservice = new InstaService();
  state = {
    posts: [],
    error: false,
  };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.Instaservice.getAllPosts()
      .then(this.onPostsLoaded)
      .catch();
  }

  onPostsLoaded = posts => {
    this.setState({
      posts,
      error: false,
    });
  };

  onError = err => {
    this.setState({
      error: true,
    });
  };

  renderItems(arr) {
    return arr.map(item => {
      const { name, altname, photo } = item;
      return <User src={photo} alt={altname} name={name} />;
    });
  }

  render() {
    const { error, posts } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    const items = this.renderItems(posts);

    return (
      <>
        <div className="right">
          <User
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaDMkde2wg-uSiVulXbm0dpCL8m2aMf7eXe38f4BtV3jeXAYYGQ"
            alt="woman"
            name="woman"
          />
          <div className="users__block">{items}</div>
        </div>
      </>
    );
  }
}
