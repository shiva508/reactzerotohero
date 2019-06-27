import React from 'react'

const withCounter=(WrappedComponent)=>{
    class CounterComponent extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                 count:0
            }
            this.increament=this.increament.bind(this)
        }
        increament(){
            this.setState(prevCount=>{
                return{
                    count:prevCount.count+1
                }     
            })
        } 
        render(){
            return <WrappedComponent count={this.state.count} increamentCount={this.increament}/>
        }
    }
    return CounterComponent
}
export default withCounter
