import { BrowserRouter as Router, Route} from "react-router-dom";
import store from "./store/store";
import { Provider } from 'react-redux';
import './sass/main.scss';
import Homepage from "./pages/Homepage";
import ReactApp from "./pages/ReactApp";
import Cats from "./pages/Cats";
import Construction from "./pages/Construction";

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/home" component={Homepage}></Route>
                <Route path="/projects" component={ReactApp}></Route>
                <Route path="/zhuqing" component={Construction}></Route>
                <Route path="/bohan" component={Construction}></Route>
                <Route path="/cats" component={Cats}></Route>

            </div>
        </Router>
    </Provider>,
app);

