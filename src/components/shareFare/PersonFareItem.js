import FareItem from "./FareItem";
export default class PersonFareItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {items, editItem, removeFareItem, personID} = this.props;
        let itemList = items.map((el, i) => {
            let uniqueKey = `personFareItem${i}`;

            return (
                <FareItem el={el} key={uniqueKey} editItem={editItem} removeFareItem={removeFareItem} personID={personID} />
            )
        });
        return (
            <div className="row">
            {itemList}
            </div>
        )
    }
}