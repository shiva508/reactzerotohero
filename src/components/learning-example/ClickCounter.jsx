import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.increamentCount}>{this.props.name} Clicked {this.props.count} times</button>
            </div>
        )
    }
}
export default withCounter(ClickCounter,508)