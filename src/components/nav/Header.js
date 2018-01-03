import { Link} from "react-router-dom";
import sytle from "./_header.scss";
export default class Header extends React.Component {
    render() {

        let menuData = ["home", "zhuqing", "bohan", "projects"];
        let headerItem = menuData.map((el, i) => {
            return (
                <li key={i} className="active"><Link to={el}>{el}</Link></li>
            )
        });

        return (
            <nav id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <h1 className="headerText">
                                Here we are

                            <svg className="heart" viewBox="0 0 32 29.6">
                                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                            </svg>
                            </h1>
                        </div>

                        <div className="col-md-8 col-xs-12">

                            <ul className="links">
                                {headerItem}
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
        );
    }
}