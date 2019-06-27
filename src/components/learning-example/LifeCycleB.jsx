import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'shiva'
        }
        console.log("B Life cycle Constructor")
    }
   
    static  getDerivedStateFromProps(props,state){
        console.log("B getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("B componentDidMount")
    }
    render() {
        console.log("B Render")
        return (
            <div>
                Life B
            </div>
        )
    }
}

export default LifeCycleB
