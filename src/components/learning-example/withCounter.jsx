import React from 'react'

const withCounter=(WrappedComponent,IncreatementNumber)=>{
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
                    count:prevCount.count+IncreatementNumber
                }     
            })
        } 
        render(){
            console.log(this.props.name)
            return <WrappedComponent 
            count={this.state.count} 
            increamentCount={this.increament}
            {... this.props}/>
        }
    }
    return CounterComponent
}
export default withCounter
