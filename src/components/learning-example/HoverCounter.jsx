import React, { Component } from 'react'
import withCounter from './withCounter'
export class HoverCounter extends Component {
    
    render() {
        return (
            <div>
              <h1 onMouseOver={this.props.increamentCount}>Hover {this.props.count} Count </h1>  
            </div>
        )
    }
}

export default withCounter(HoverCounter)

