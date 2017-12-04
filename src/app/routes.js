import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Frame from "./template/frame";
import TodoListComponent from "./components/todoList/todoListComponent";
import ContactComponent from "./components/contact/contactComponent";

export default () => {
    return(
        <Route path="/" component={Frame}></Route>
    )
}


