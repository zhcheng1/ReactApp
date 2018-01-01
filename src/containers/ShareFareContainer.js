import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PersonFare from "../components/shareFare/PersonFare";
import CalculatedFare from "../components/shareFare/CalculatedFare";

class ShareFareContainer extends React.Component {
    render() {
        let {people, addPerson, items, addFareItem, editItem, removeFareItem} = this.props;
        let peopleList = [];
        Object.keys(people).forEach((key) => {
            peopleList.push(people[key]);
        });
        return (
            <div className="shareFare">

                <PersonFare people={peopleList} addPerson={addPerson}
                            items={items} addFareItem={addFareItem}
                            editItem={editItem} removeFareItem={removeFareItem}/>

                <CalculatedFare />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        people: state.shareFareReducer.people,
        items: state.shareFareReducer.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addPerson: actions.addPerson,
        addFareItem: actions.addFareItem,
        editItem: actions.editFareItem,
        removeFareItem: actions.removeFareItem
    }, dispatch);
};

export default ShareFareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareFareContainer);