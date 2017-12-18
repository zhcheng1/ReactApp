
import Header from "../components/nav/header";
import Footer from "../components/nav/footer";


export default class Frame extends React.Component {
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