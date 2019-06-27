import React, { Component } from 'react'

class LifeCycleUpdateB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'shiva'
        }
        console.log("UB Life cycle Constructor")
    }
    static  getDerivedStateFromProps(props,state){
        console.log("UB  getDerivedStateFromProps")
        return null;
    }
    shouldComponentUpdate(){
        console.log("UB  shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("UB getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate(){
        console.log("UB componentDidUpdate")
    }
    
    render() {
        console.log("UB Render")
        return (
            <div>
               
                Cycle
            </div>
        )
    }
}

export default LifeCycleUpdateB
