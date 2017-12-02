import React from "react";
import ReactDOM from "react-dom";

export default TodoListComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "To Do List"
        };
    }
    
    render() {
        let todosCopy = ['React learning', 'wash'];
        todosCopy = todosCopy.map(function(item, index){ // how to loop through an object
            return (
                <li>{item}</li>
            )
        })
        return(
            <div id="todo-list">
                <h1>{title}</h1>
                <ul>{todosCopy}</ul>
            </div>
        );
    }
}


//var TodoComponent = React.createClass({
//    // state
//    getInitialState: function() {
//        return {
//            todos: ['React learning', 'wash'],
//            age: 30
//        }
//    },
//    
//});
