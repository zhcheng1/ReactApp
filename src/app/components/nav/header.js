import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {

        let menuData = ["home", "to do list"];
        let headerItem = menuData.map((el, i) => {
            return (
                <li key={i}><Link to="/{el}">{el}</Link></li>
            )
        });

        return (
            <div id="header">
                <img src={require('../../../img/128H.jpg')} className="nav-header-logo"/>
            <ul>
                {headerItem}
            </ul>
            </div>
        );
    }
}