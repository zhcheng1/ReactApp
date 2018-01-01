export default class PersonFareInput extends React.Component {
    constructor(props) {
        super(props);

        let {el, editing} = this.props;

        if(editing) {
            this.state = {
                id: el.id,
                item: el.item,
                quantity: el.quantity,
                unitPrice: el.unitPrice
            };
        } else {
            this.state = {
                id: 0,
                item: "",
                quantity: 0,
                unitPrice: 0
            };
        }

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    addItem() {
        let currItem = {};
        currItem.item = this.state.item;
        currItem.quantity = this.state.quantity;
        currItem.unitPrice = this.state.unitPrice;
        this.props.addItem(currItem, this.props.personID);
    }

    editItem() {
        let currItem = {};
        currItem.id = this.state.id;
        currItem.item = this.state.item;
        currItem.quantity = this.state.quantity;
        currItem.unitPrice = this.state.unitPrice;

        this.props.editItem(currItem);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        let {editing} = this.props;
        return (
            <div>
                <input type="text" placeholder="Add Item"
                    value={this.state.item}
                    name="item"
                    onChange={this.handleChange}
                />
                <input type="number" placeholder="Add Quantity"
                    value={this.state.quantity}
                       onChange={this.handleChange}
                       name="quantity"
                    />
                <input type="text" placeholder="Add Price"
                    value={this.state.unitPrice}
                       name="unitPrice"
                       onChange={this.handleChange}
                    />
                <button className={editing ? 'hide' :''} onClick={this.addItem}>Add</button>
                <button className={editing ? '' :'hide'} onClick={this.editItem}>OK</button>
            </div>
        )
    }
}