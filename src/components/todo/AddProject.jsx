import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class AddProject extends Component {
    constructor(){
        super();
        this.state={
            projectName:'',
            projectIdentifier:'',
            description:'',
            start_date:'',
            end_date:''
                    }
                    {/*this.changeHandler=this.changeHandler.bind(this)*/}
    }
changeHandler=e=>{
this.setState({
    [e.target.name]:e.target.value
})
}
submitHandler=e=>{
    e.preventDefault() 
    console.log(this.state)
}
    render() {
        const{projectName,projectIdentifier,description,start_date,end_date}=this.state;
        return (
            <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Project form</h5>
                        <hr />
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <input type="text" name="projectName" value={projectName} className="form-control form-control-lg project name" placeholder="Project Name" onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="projectIdentifier" value={projectIdentifier} className="form-control form-control-lg projectIdentifier" placeholder="Unique Project ID" onChange={this.changeHandler}/>
                            </div>
                            
                            <div className="form-group">
                                <textarea name="description" value={description} className="form-control form-control-lg description" placeholder="Project Description" onChange={this.changeHandler}></textarea>
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date"  className="form-control form-control-lg" name="start_date" value={start_date} onChange={this.changeHandler}/>
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="end_date" value={end_date} onChange={this.changeHandler}/>
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AddProject
