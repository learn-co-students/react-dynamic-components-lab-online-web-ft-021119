import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    let currentOpacity = this.props.opacity * 10
    while (currentOpacity >= 2) {
      return (
        <div className="color-box" style={{opacity: currentOpacity}}>
          <ColorBox opacity={currentOpacity -= 1} />
        </div>
      )
    } 
  }
}
