import React,{Component} from 'react'

class Bye extends Component{
  constructor(props){
      super();
      this.state={
       temp:10   
      }
  }
  changeEvent(){
    this.setState({
        temp:this.state.temp+1
    },()=>console.log(this.state.temp))
    console.log(this.state.temp)
  }
    render(){
        
        return (
            <div>
               <h1>Bye {this.state.temp}</h1> 
               <h1>Bye {this.props.name}</h1> 
<button onClick={()=>this.changeEvent()}>Click</button>
            </div>
        );
    }
}

export default Bye