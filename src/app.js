import { BrowserRouter as Router, Route} from "react-router-dom";
import store from "./store/store";
import { Provider } from 'react-redux';
import './sass/main.scss';
import Homepage from "./pages/Homepage";
import ReactApp from "./pages/ReactApp"

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/home" component={Homepage}></Route>
                <Route path="/projects" component={ReactApp}></Route>

            </div>
        </Router>
    </Provider>,
app);

