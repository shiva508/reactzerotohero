import React from 'react'

function Person({persondata}) {
    return (
        <div>
                    <td>{persondata.id}</td>
                    <td>{persondata.name}</td>
                    <td>{persondata.age}</td>
                    <td>{persondata.skills}</td>
           
            {/* <h1>i am {persondata.name}, i am {persondata.age} old, i am good at {persondata.skills}</h1>*/}
        </div>
    )
}

export default Person
