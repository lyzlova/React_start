import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaDMkde2wg-uSiVulXbm0dpCL8m2aMf7eXe38f4BtV3jeXAYYGQ"
          alt="woman"
          name="woman"
          min
        />
        <img src={this.props.src} alt={this.props.alt} />
        <div className="post__name">some</div>
        <div className="post__descr">lorem</div>
      </div>
    );
  }
}
