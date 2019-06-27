import React, { Component } from 'react'
import ChildComponent1 from './ChildComponent1';
import Person from './Person'
export class ParentComponent1 extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {
                    id:508,
                    name:'Shiva',
                    age:27,
                    skills:'Java'
                }
            ] 
        }
        this.changePersonData=this.changePersonData.bind(this)
    }
changePersonData(){
    this.setState({
        data:[
            {
                id:508,
                name:'Shiva',
                age:27,
                skills:'Java'
            },{
                id:408,
                name:'Shiva Dasari',
                age:27,
                skills:'React' 
            },{
                id:423,
                name:'Kousar',
                age:27,
                skills:'Machine Learning'
            }
        ]

    })
}

    render() {
        return (
            <div>
                <table>
                <thead>
                    <tr>
                    
               <th><td>ID</td></th>
              <th><td>Name</td></th> 
               <th><td>Age</td></th>
               <th><td>Skill</td></th>
               
     
                    </tr>
                </thead>
            
            <tbody>
                <tr>
                {this.state.data.map(person=><Person key={person.id} persondata={person}></Person>)}
                </tr>
               
              
               </tbody>
            </table>
            <ChildComponent1 changeList={this.changePersonData}></ChildComponent1> 
            </div>
        )
    }
}

export default ParentComponent1
