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
        let {el, personID} = this.props;
        this.props.removeFareItem(el.id, personID);
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
                <div className="row">
                    <div className="col-md-3">{el.item}</div>
                    <div className="col-md-3">{el.unitPrice}</div>
                    <div className="col-md-3">{el.quantity}</div>
                    <div className="col-md-3">
                        <button className="btn btn-outline-primary" onClick={this.showInput}>Edit</button>
                        <button className="btn btn-outline-primary" onClick={this.removeItem}>Remove</button>
                    </div>

                </div>
            )
        }

        return (
            <div className="fare-item">
                {element}
            </div>
        )
    }
}