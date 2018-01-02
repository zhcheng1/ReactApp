import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PersonFare from "../components/shareFare/PersonFare";
import CalculatedFare from "../components/shareFare/CalculatedFare";
import style from "../components/shareFare/shareFare.scss";

class ShareFareContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            showRes: false
        }
        this.showResult = this.showResult.bind(this);
    }
    showResult() {
        let {people, items, calculateTotal} = this.props;
        calculateTotal(people, items);
        this.setState({
            showRes: true
        })
    }
    render() {
        let {people, addPerson, items, addFareItem, editItem, removeFareItem, result} = this.props;
        let peopleList = [];
        Object.keys(people).forEach((key) => {
            peopleList.push(people[key]);
        });

        return (
            <div className="shareFare">
                <h1>Share Fare Calculator</h1>
                <PersonFare people={peopleList} addPerson={addPerson}
                            items={items} addFareItem={addFareItem}
                            editItem={editItem} removeFareItem={removeFareItem}
                            showResult={this.showResult} />

                <div className={this.state.showRes ? '' : 'hide'}>
                    <CalculatedFare result={result} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        people: state.shareFareReducer.people,
        items: state.shareFareReducer.items,
        result: state.shareFareResultReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addPerson: actions.addPerson,
        addFareItem: actions.addFareItem,
        editItem: actions.editFareItem,
        removeFareItem: actions.removeFareItem,
        calculateTotal: actions.calculateTotal
    }, dispatch);
};

export default ShareFareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareFareContainer);