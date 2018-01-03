import style from "./_panel.scss";
import {Link} from "react-router-dom";

export default class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add() {
        let addToCounter = this.props.addCounter;
        addToCounter();
    };

    render() {
        let {count, panelContent, imageNames} = this.props;

        let panelItems = panelContent.map((el, i) => {

            return (
                <div className="col-md-6 col-xs-12" key={i}>
                    <div className="panelItem">
                        <img className="leftAlign bounce-ball" src={el.img[imageNames[i]]}/>
                        <div className="leftAlign content">
                            <Link to={el.link}>
                                <h2>{el.title}</h2>
                                <p>{el.content}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className="panel">
                <div className="container">
                    <div className="row">
                        { panelItems }
                    </div>
                </div>
            </div>
        )
    }
}

