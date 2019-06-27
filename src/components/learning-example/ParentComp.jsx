import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComp from './MemoComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Shiva'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Shiva'
            })
        },2000)
    }
    render() {
        console.log("*******************Parent************************")
        return (
            <div>
                Parent Component
                {/*<PureComp name={this.state.name}></PureComp>
                <RegComp name={this.state.name}></RegComp>*/}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
