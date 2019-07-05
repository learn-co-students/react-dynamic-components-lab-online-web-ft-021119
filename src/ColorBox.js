import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

      if (parseFloat(this.props.opacity) >= parseFloat(0.2)) {
          const newValue = parseFloat(this.props.opacity, 10) - parseFloat(0.1, 10);
          return (
              <div className="color-box" style={{opacity: this.props.opacity}}>
                  <ColorBox opacity={newValue} />
              </div>
          );
      } else {
          return null;
      }
  }

}
