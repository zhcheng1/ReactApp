var React = require('react');
var ReactDOM = require('react-dom');

// create component
var TodoComponent = React.createClass({
    // state
    getInitialState: function() {
        return {
            todos: ['React learning', 'wash'],
            age: 30
        }
    },
    render: function() {
        var todosCopy = this.state.todos;
        todosCopy = todosCopy.map(function(item, index){ // how to loop through an object
            return (
                <li>{item}</li>
            )
        })
        return(
            <div id="todo-list">
                <h1>{this.props.message}</h1>
                <ul>{todosCopy}</ul>
            </div>
        );
    }
});

var myList = {name:'React', status:'finished'}

// put into html
ReactDOM.render(<TodoComponent message="To Do List" list={myList} />, document.getElementById('app'));