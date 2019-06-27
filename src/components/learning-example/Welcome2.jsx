import React from 'react';

{/*const Welocome2= props => {
   return(
    <div>
    <h3>WE ARE learning {props.java}</h3>
    <h3>Im ARE learning {props.react}</h3>
    </div>) ;
    
}*/}

{/* DESTRUCTORING*/}
{/*const Welocome2= ({java,react}) => {
    return(
     <div>
     <h3>WE ARE learning {java}</h3>
     <h3>Im ARE learning {react}</h3>
     </div>) ;
     
 }*/}
 const Welocome2= props => {
     const {java,react}=props
     
    return(
     <div>
     <h3>WE ARE learning {java}</h3>
     <h3>Im ARE learning {react}</h3>
     </div>
     ) ;
     
 }
export default Welocome2