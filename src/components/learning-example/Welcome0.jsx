import React,{Component}from 'react';

{/*class Welcome extends Component {
render(){
return (
    <div>
        <h2>HI {this.props.name} -{this.props.id}</h2> 
        <h1>Bye</h1>
    </div>

);
}
}*/}
class Welcome0 extends Component {
    
    render(){
        const {name,id}=this.props
    return (
        <div>
            <h2>HI {name} -{id}</h2> 
            <h1>Bye</h1>
        </div>
    
    );
    }
    }
export default Welcome0
