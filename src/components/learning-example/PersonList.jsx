import React from 'react'
import Person from './Person'
function PersonList() {

    const personList=[
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

    const persons=personList.map(person=><Person key={person.id} persondata={person}/>)

    return <div>{persons}</div> ;
}

export default PersonList
