import SourcingFormInput from "./SourcingFormInput";
export default class SourcingForm extends React.Component {
    constructor(props) {
        super(props);

        // this.addValue = this.addValue.bind(this);
        // this.changeValue = this.changeValue.bind(this);
    }
    // changeValue(e) {
    //
    //     this.setState({inputItem: e.target.value})
    // }
    // addValue(e) {
    //     if(e.keyCode == 13) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //
    //         let formV = this.state.formValue;
    //         formV = formV.concat(this.state.inputItem);
    //         this.setState(
    //             {formValue: formV}
    //         );
    //     }
    //
    // }

    render() {
        let formInputList = this.props.formData.map((item, i) => {
            let key = `formInput${item.title}${i}`;
            return(
                <SourcingFormInput item={item} key={key} />
            )
        });
        return (
            <div>
                {formInputList}
                <button onClick={(e) => this.props.handlePageChange(e, -1)}>Prev</button>
                <button onClick={(e) => this.props.handlePageChange(e, 1)}>Next</button>
            </div>
        )
    }
}