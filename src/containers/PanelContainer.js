import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import Panel from "../components/panel/Panel";

class PanelContainer extends React.Component {
    render() {
        let {count, addCounterAction} = this.props;
        return (
            <div>
                <Panel count={count} addCounter={addCounterAction} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    addCounterAction: bindActionCreators(addCounter, dispatch) // () => dispatch(addCounter)
});

export default PanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelContainer);