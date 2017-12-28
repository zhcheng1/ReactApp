
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";


export default class Template extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="app-root">
                <Header />
                    { this.props.children }
                <Footer />
            </div>
            )
    }
}