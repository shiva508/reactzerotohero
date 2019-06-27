import React, { Component } from 'react'
import LifeCycleUpdateB from './LifeCycleUpdateB';

export class LifeCycleUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'shiva'
        }
        console.log("U Life cycle Constructor")
    }
    static  getDerivedStateFromProps(props,state){
        console.log("U  getDerivedStateFromProps")
        return null;
    }
    shouldComponentUpdate(){
        console.log("U  shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("U getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate(){
        console.log("U componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            name:'shivaD'  
        })
    }
    render() {
        console.log("U Render")
        return (
            <div>
                 <button onClick={this.changeState}> Change</button>
                <LifeCycleUpdateB></LifeCycleUpdateB>
                Life
            </div>
        )
    }
}

export default LifeCycleUpdate
