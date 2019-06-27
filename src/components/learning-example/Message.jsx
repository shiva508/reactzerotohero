import React ,{Component} from 'react';

class Message extends Component{

    constructor(){
        super();
        this.state={
            message:'Welcome Viewer'
        };
    }
    changeMessage(){
        this.setState(
            {
                message:'Thanks for subscribing'
            }
        )
    }
render(){
    return (
        <div>
<h1>{this.state.message}</h1>
<button onClick={()=>this.changeMessage()}>Subscriber</button>
        </div>
    )
}

}

export default Message