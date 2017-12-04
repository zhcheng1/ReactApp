import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <div id="header">
            <ul>
                <li><Link to="/todo">todo</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
            </div>
        );
    }
}