import React, { Component } from 'react'

 class ClickCounterTwo extends Component {

render(){
        return (
            <div>
            <button onClick={this.props.increamentCount}>  Clicks Count {this.props.count}</button>
            </div>
        )
    }
}

export default ClickCounterTwo
