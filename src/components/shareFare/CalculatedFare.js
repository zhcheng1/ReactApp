export default class CalculatedFare extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let result = this.props.result;
        let rules = result.rules.map((r, i) => {
            return (
                <div className="col-md-12" key={"rule" + i}>
                    Rule #{i} : {r}
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Total Amount Spent: ${result.total}</h2>
                    </div>
                    {rules}

                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}