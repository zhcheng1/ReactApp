import React from "react";
import ReactDOM from "react-dom";
import Header from "../nav/header";
import Footer from "../nav/footer";


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