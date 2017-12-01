var React = require('react');
var ReactDOM = require('react-dom');

// create component
var TodoComponent = React.createClass({
    render: function() {
        return(
            <h1>hi</h1>
        );
    }
});

// put into html
ReactDOM.render(<TodoComponent />, document.getElementById('app'));