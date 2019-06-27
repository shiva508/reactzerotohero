import React,{Component} from 'react'
class Conter extends Component{
constructor(props) {
    super(props)

    this.state = {
         count:0
    }
}
increament(){
    {/*this.setState({
        count:this.state.count+1
    },()=>{console.log("Call back",this.state.count)}
     
    )
console.log(this.state.count) */}
this.setState(prev=>({
            count:prev.count+1
}))
}
 increamentFive(){
     this.increament();
     this.increament();
     this.increament();
     this.increament();
     this.increament();
 }
    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>this.increamentFive()}>Rise Rate</button>
            </div>
        );
    }
} 

export default Conter