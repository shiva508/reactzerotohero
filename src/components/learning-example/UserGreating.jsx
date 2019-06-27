import React, { Component } from 'react'

export class UserGreating extends Component {
    constructor(){
        super();
        this.state={
            isLoggedIn:true
        }
    }
    render() {
       {/* if(this.state.isLoggedIn){
            return (
                <div>
                <h1>Welcome shiva</h1>   
               </div>
        ) 
        }else{
            return (
                <div>  
                <h1>Welcome Guest</h1> 
               </div>
        )
        }*/} 

        {/* let message
        if (this.state.isLoggedIn) {
            message= <h1>Welcome shiva</h1> 
        }else{
            message= <h1>Welcome Guest</h1> 
        }
        
        return(
                <div>
                {message }
                </div>
        );*/}
      {/*return(
            this.state.isLoggedIn?(
            <div><h1>Welcome shiva</h1></div>):(
            <div><h1>Welcome Guest</h1></div>)
        );*/}  
       
        return this.state.isLoggedIn && <div><h1>Welcome shiva</h1></div>
    }
}

export default UserGreating
