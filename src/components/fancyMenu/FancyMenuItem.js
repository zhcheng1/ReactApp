
export default class FancyMenuItem extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.showMenuLink = this.showMenuLink.bind(this);
    }

    showMenuLink() {
        let {show} = this.state;
        this.setState({
            show: !show
        })
    }
    render() {
        let {prefix, index, item, link} = this.props;
        const id = `${prefix}${index + 1}`;
        return (
            <div id={id} className="menuItem" onClick={this.showMenuLink}>
                <div className={this.state.show ? '' : 'hide'}>
                    <h4>{item} {link}</h4>
                </div>
            </div>
        )
    }
}