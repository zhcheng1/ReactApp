import { BrowserRouter as Router, Route} from "react-router-dom";
import './sass/main.scss';

//import routes from "./routes.js"

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Homepage from "./pages/Homepage";
import ReactApp from "./pages/ReactApp"

//let store = createStore(todoApp);
// <Provider store={store}>

const app = document.getElementById('app');
ReactDOM.render(

        <Router>
            <div>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/reactapp" component={ReactApp}></Route>
            </div>
        </Router>,
app);

