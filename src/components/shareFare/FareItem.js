import PersonFareInput from "./PersonFareInput";
export default class FareItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
        this.showInput = this.showInput.bind(this);
        this.editItem = this.editItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    showInput() {
        this.setState({ editing: true });
    }

    editItem(item) {

        this.props.editItem(item, this.props.personID);
        this.setState({ editing: false });
    }

    removeItem() {
        this.props.removeFareItem(this.props.item);
    }

    render() {
        let {el, editItem, personID} = this.props;

        let element;
        if (this.state.editing) {
            element = (
                <PersonFareInput editing={this.state.editing} el={el} editItem={this.editItem} personID={personID} />
            )
        } else {
            element = (
                <div>
                    <div>{el.item}</div>
                    <div>{el.unitPrice}</div>
                    <div>{el.quantity}</div>
                    <button onClick={this.showInput}>Edit</button>
                    <button onClick={this.removeItem}>Remove</button>
                </div>
            )
        }

        return (
            <div className="col-xs-3 col-md-2">
                {element}
            </div>
        )
    }
}