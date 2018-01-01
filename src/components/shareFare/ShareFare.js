import PersonFare from "./PersonFare";
import CalculatedFare from "./CalculatedFare";

export default class ShareFare extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {people, items, addPerson, addFareItem} = this.props;

        return (
            <div lassName="shareFare"c>

                <PersonFare people={people} addPerson={addPerson} items={items} addFareItem={addFareItem} />

                <CalculatedFare />
            </div>
        )
    }
}