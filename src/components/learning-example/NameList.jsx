import React from 'react'

function NameList() {
    const names=['Shiva','Satish','Ravi']
    const nameList=names.map((name,index)=><h1 key={index}>{index}-{name}</h1>)
    return (
        <div> {nameList}
            {/*<h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1>*/}
           
        </div>
    )
}

export default NameList
