import React from 'react'

function Hero({heroName}) {
    if (heroName=='Joker') {
        throw new Error("Not A Hero")
    }
    return (
        <React.Fragment>
         <h1>{heroName} </h1>  
        </React.Fragment>
    )
}

export default Hero
