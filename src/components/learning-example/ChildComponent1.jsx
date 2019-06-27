import React from 'react'

function ChildComponent1(props) {
    return (
        <div>
            <button onClick={props.changeList}>Change Data</button>
        </div>
    )
}

export default ChildComponent1
