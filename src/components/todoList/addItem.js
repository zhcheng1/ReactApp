var React = require('react');

var AddItem = React.createClass({
    render: function(){
        return(
            <form>
                <input type="text" required />
                <input type="submit" value="hit me" />
            </form>
        )
    }
});

module.exports = AddItem;