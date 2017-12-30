import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addCounterAction from '../actions';
import Panel from "../components/panel/Panel";

class PanelContainer extends React.Component {
    render() {
        let {count, actions} = this.props;
        return (
            <div>
                <Panel count={count} actions={actions} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    debugger;
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(addCounterAction, dispatch) // () => dispatch(addCounter)
});

export default PanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelContainer);