import React,{Component} from 'react';
class EmployeTable extends Component{

    constructor(){
        super();
        this.state={
            data:[
                    {
                        "userId":1,
                        "userName":"Shiva"
                    },
                    {
                        "userId":2,
                        "userName":"Satish"
                    },
                    {
                        "userId":3,
                        "userName":"Ravi"
                    }
            ]
        }
    }

    render(){

        return(
            <div className="EmployeTable">
            <div className="Header"></div>
                <table >
                    <tbody>
                        {this.state.data.map((user,i)=><TableRow key={i} data={user}
                        />)}
                    </tbody>

                </table>

            </div>

        );
    }
}

export class TableRow extends Component{
    render(){
return(

    <tr>
        <td>{this.props.data.userId}</td>
        <td>{this.props.data.userName}</td>
    </tr>
);

    }
}

export const Header=()=><h1>Header</h1>
export default EmployeTable