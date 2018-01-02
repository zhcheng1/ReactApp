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
                <div className="person-fare-item-list" key={uniqueKey}>
                    <FareItem el={el}
                              editItem={editItem} removeFareItem={removeFareItem}
                              personID={personID} />
                </div>
            )
        });
        return (
            <div className="person-fare-item container" key={personID}>
                <div className="row">
                    <div className="col-md-3">Item</div>
                    <div className="col-md-3">Quantity</div>
                    <div className="col-md-3">UnitPrice</div>
                </div>
            {itemList}
            </div>
        )
    }
}