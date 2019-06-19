import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
      const newOpacity = this.props.opacity;
 
        if (this.props.opacity >= 0.2) {
            return (
                <div className="color-box" style={{opacity: 1}}>
                    <ColorBox opacity={newOpacity - 0.1} />
                </div>
            );
        } else {
            return null;
        }
  }
  
}


/* <div className="color-box" style={{opacity: 2}}>
        if (opacity >= 0.2) {
          render() {
            return(
              <div className="color-box" style={{opacity: 2}}>
               {this.props.opacity}
              </div>
              {this.props.opacity} = {this.props.opacity} - 0.1
            )
          }
        } else {
            render()
              return (null) 
        }
        
</div> */