import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Panel from "../components/panel/Panel";

class PanelContainer extends React.Component {
    render() {
        let {count, addCounter} = this.props;

        return (
            <div>
                <Panel count={count} addCounter={addCounter} />
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