import React, {Component} from 'react'
// props are passed from outside the component
// class SingleTodo extends Component {
//     constructor(){
//         super();
//     }

//     render() {
//         return (
//             <li>{this.props.todo} <button onClick={this.props.delete}>x</button></li>
//         );
//     }
// }

const SingleTodo = props => {
    return (
        <li>{props.todo} <button onClick={props.delete}>x</button></li>
    );
}

export default SingleTodo;