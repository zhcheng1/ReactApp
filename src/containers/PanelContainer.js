import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Panel from "../components/panel/Panel";

import neptune from "../img/neptune.png";
import venus from "../img/venus.png";
import mars from "../img/mars.png";
import jupiter from "../img/jupiter.jpg";
import damao1 from "../img/damao1.jpg";
import xiaomi1 from "../img/xiaomi1.jpg";
import pang1 from "../img/pang1.jpg";

class PanelContainer extends React.Component {
    render() {
        let {count, addCounter, route} = this.props;
        let panelContent = null;
        let imageNames = null;

        if(route == "homepage") {
            panelContent = [
                {img: {venus},title: "About Zhuqing",content: "Click to see her resume inside",link: "/zhuqing"},
                {img: {mars},title: "About Bohan", content: "Click to see his resume inside", link: "/bohan"},
                {img: {neptune},title: "React Apps", content: "See the share fare app inside", link: "/projects"},
                {img: {jupiter},title: "About Our Cats", content: "See out cats", link: "/cats"}
            ];

            imageNames = [
                "venus", "mars", "neptune", "jupiter"
            ];
        }

        if(route == "cats") {
            panelContent = [
                {img: {damao1},
                    title: "Damao 大猫",
                    content: "Super sweet! She has her own territory. Has to go out during night to patrol her land.",
                    link: "/cats"},
                {img: {xiaomi1},title: "Xiaomi 小咪",
                    content: "It is very sad that we lost her when we moved to a new place",
                    link: "/cats"},
                {img: {pang1},title: "Panghai 胖孩", content: "Our new family member!", link: "/cats"}
            ];

            imageNames = [
                "damao1", "xiaomi1", "pang1"
            ];
        }


        return (
            <div>
                <Panel count={count} addCounter={addCounter}
                       panelContent={panelContent} imageNames={imageNames} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.panelReducer.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addCounter: actions.addCounter
    }, dispatch);
};

export default PanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelContainer);