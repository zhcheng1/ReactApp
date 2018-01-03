import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import sytle from "./_footer.scss";

export default class Footer extends React.Component {
    render() {
        let menuData = ["home", "zhuqing", "bohan"];
        let headerItem = menuData.map((el, i) => {
            return (
                <li key={i}><Link to={el}>{el}</Link></li>
            )
        });
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <h1 className="footerText">Thank you for visiting!</h1>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <ul className="links">
                                {headerItem}
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <h1 className="footerText">Contact us:</h1>
                                <h1 className="footerText">sarazqcheng@gmail.com</h1>
                                <h1 className="footerText">patrick.dk.chen@gmail.com</h1>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}