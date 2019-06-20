import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let colorBox = this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null
    console.log(this.props.opacity)
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
          {colorBox}
      </div>
    )
  }
  
}
