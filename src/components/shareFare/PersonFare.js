import PersonFareItem from "./PersonFareItem";
import PersonFareInput from "./PersonFareInput";
export default class PersonFare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            itemList: []
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addPerson = this.addPerson.bind(this);
        this.addPersonClick = this.addPersonClick.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    toggleClass() {
        this.setState({
            show: true
        })
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        });
    }

    addPerson(e) {
        if (e.which === 13) {
            this.addPersonClick();
        }
    }

    addPersonClick() {
        this.props.addPerson(this.state.name);
        this.setState({
            show: false
        })
    }

    addItem(item, personID) {
        this.state.itemList.push(item);
        this.props.addFareItem(item, personID);
    }

    render() {
        let {people, items, editItem, removeFareItem} = this.props;

        let peopleList = people.map((el, i) => {
            let itemList = [];
            if(el.items.length != 0) {
                el.items.forEach((item, i) => {
                    itemList.push(items[item]);
                })
            }
            debugger
            return (
                <div className="row" key={el.name}>
                    <div className="col-xs-12">
                        {el.name} {el.id} Total Paid: **
                    </div>
                    <PersonFareItem items={itemList} editItem={editItem} removeFareItem={removeFareItem}
                                    personID={el.id}/>
                    <PersonFareInput addItem={this.addItem} personID={el.id}/>
                </div>
            )

        });

        return (
            <div className="container">
                {peopleList}
                <div className="row">
                    <div className="col-xs-12">
                        <button onClick={this.toggleClass}>Add One Person</button>
                        <button>Calculate</button>
                    </div>
                    <div className="col-xs-12">
                        <div className={this.state.show ? '' : 'hide'}>
                            <input type="text" placeholder="Name Here"
                                   value={this.state.name}
                                   onChange={this.handleChange}
                                   onKeyDown={this.addPerson} />
                            <button onClick={this.addPersonClick}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}