import React, { Component } from 'react';

function checkOpacity(opacity) {
  if (opacity >= 0.2) {
    return <ColorBox opacity={opacity - 0.1} />
  } else {
    return null
  }
}

export default class ColorBox extends Component {
  render() {
    let currentOpacity = this.props.opacity
    return (
      <div className="color-box" style={{opacity: currentOpacity}}>
        { checkOpacity(currentOpacity)}
      </div>
    )
  }
}
