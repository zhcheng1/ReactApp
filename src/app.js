import { BrowserRouter as Router, Route} from "react-router-dom";
import './sass/main.scss';

//import routes from "./routes.js"

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Homepage from "./view/Homepage";

//let store = createStore(todoApp);
// <Provider store={store}>

const app = document.getElementById('app');
ReactDOM.render(

        <Router>
            <Route path="/" component={Homepage}></Route>
        </Router>,
app);

