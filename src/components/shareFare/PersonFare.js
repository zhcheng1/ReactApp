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
            show: !this.state.show
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

            return (
                <div className="people-list" key={el.id}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h3 className="person-title">{el.name}</h3>
                            </div>
                        </div>
                    </div>
                    <PersonFareItem items={itemList} editItem={editItem} removeFareItem={removeFareItem}
                                    personID={el.id}/>
                    <div className="container">

                        <PersonFareInput addItem={this.addItem} personID={el.id}/>

                    </div>
                </div>
            )

        });

        return (
            <div className="person-fare">

                {peopleList}

                <div className="middle-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <button className="btn btn-outline-primary" onClick={this.toggleClass}>Add One Person</button>
                                <button className="btn btn-outline-primary" onClick={()=>this.props.showResult()}>Calculate</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className={this.state.show ? 'add-person-input' : 'hide'}>
                                    <input className="form-control"
                                           type="text" placeholder="Name Here"
                                           value={this.state.name}
                                           onChange={this.handleChange}
                                           onKeyDown={this.addPerson} />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={this.state.show ? 'add-person-input' : 'hide'}>
                                <span className="btn btn-outline-success" onClick={this.addPersonClick}>OK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}