import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super();
        this.state={
            userName:'Shiva',
            comment:'',
            topic:'react',

            user:{
                userName:'Shiva',
                comment:'',
                topic:'react'

                    }
        }
    }
    handleUserNameChange=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleCommentChange=event=>{
        this.setState({
            comment:event.target.value
        })
    }
    handleSubmit=event=>{
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        const {userName,comment,topic}=this.state
        return (
            
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <h1>Form Component</h1> 
                    <label>User Name</label>
                    <input type="text" value={userName} onChange={this.handleUserNameChange}/>
                    </div>
                    <div>
                    <label>Comment</label>
                    <textarea value={comment} onChange={this.handleCommentChange}></textarea>
                    </div>
                    <div>
                        <label > Topic</label>
                        <select value={topic}  onChange={this.handleTopicChange}>
                            <option value="java">JAVA</option>
                            <option value="react">React</option>
                            <option value="spring">Spring</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
               </form>
            
        )
    }
}

export default Form
