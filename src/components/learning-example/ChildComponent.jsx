import React from 'react'

function ChildComponent(props) {
    return (
        <div>
           <button onClick={()=>props.clickHandler('Child')}>Greate Parent</button> 
        </div>
    )
}

export default ChildComponent
