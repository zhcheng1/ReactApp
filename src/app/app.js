import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
require('../css/main.css');

//import routes from "./routes.js"
import Homepage from "./components/homepage/home";

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
        <div>
            <Route path="/" exact component={Homepage}></Route>
        </div>
    </Router>,
app);

