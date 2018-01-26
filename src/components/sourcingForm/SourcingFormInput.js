export default class SourcingFormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputItem: ""
        }
    }
    render() {
        let itemList = this.props.item.formValue.map((item, i) => {
            let key = `input${item}${i}`;
            return(
                <span key={key}>{item}</span>
            )
        });
        let {title} = this.props.item;
        // onChange={this.changeValue} onKeyDown={this.addValue}
        return (
            <div>
                <h3>{title}</h3>
                <p>{itemList}</p>
                <input value={this.state.inputItem}  />
            </div>
        )
    }
}