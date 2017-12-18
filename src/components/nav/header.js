import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {

        let menuData = ["home", "today's to do", "calendar"];
        let headerItem = menuData.map((el, i) => {
            return (
                <li key={i}><Link to='${{el}}'>{el}</Link></li>
            )
        });

        return (
            <div id="header">

            <ul>
                {headerItem}
            </ul>
            </div>
        );
    }
}