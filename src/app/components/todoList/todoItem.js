var React = require('react');
require('../css/todoItem.css');

// create TodoItem; parent: TodoComponent
var TodoItem = React.createClass({
    render: function() {
        return (
            <li>
                <div>
                    <span>{this.props.item}</span>
                    <span onClick={this.handleDelete}>x</span>
                </div>
            </li>
        );
    },
    handleDelete: function() {
        this.props.onDelete(this.props.item);
    }
});

module.exports = TodoItem;