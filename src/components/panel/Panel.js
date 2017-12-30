import style from "./_panel.scss";
import {Link} from "react-router-dom";
import someIMG from "../../img/moon.jpg";

export default class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add() {
        let {addCounter} = this.props;
        addCounter();
    };

    render() {
        debugger;
        let {count} = this.props;

        let panelContent = [
            {imgSrc: {someIMG},title: "About Zhuqing",content: "Click to see her resume inside",link: "/zhuqing"},
            {imgSrc: "../../img/moon.jpg", title: "About Xiaogou", content: "See his resume inside", link: "/bohan"},
            {imgSrc: "../../img/moon.jpg", title: "About This Site", content: "See inside", link: "/projects"},
            {imgSrc: "../../img/moon.jpg", title: "About Cats", content: "See out cats", link: "/cats"}
        ];

        let panelItems = panelContent.map((el, i) => {
            return (
                <div className="col-md-6 col-xs-12" key={i}>
                    <div className="panelItem">
                        <img className="leftAlign bounce-ball" src={el.imgSrc}/>
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
                    <div>
                        <div className="col-xs-12" onClick={this.add}>{count}</div>
                    </div>
                </div>
            </div>
        )
    }
}

