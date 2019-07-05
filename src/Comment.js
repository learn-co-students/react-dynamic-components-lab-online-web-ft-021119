// add Comment component here
import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div id="comment" className="comment">
        {this.props.commentText}
      </div>
    )
  }
}
