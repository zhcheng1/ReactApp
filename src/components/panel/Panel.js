import style from "./_panel.scss";
import {Link} from "react-router-dom";

export default class Panel extends React.Component {

    render() {
        let panelContent = [
            {imgSrc: "../../img/moon.jpg", title: "About Zhuqing", content: "Click to see her resume inside", link: "/zhuqing"},
            {imgSrc: "../../img/moon.jpg", title: "About Xiaogou", content: "See his resume inside", link:"/bohan"},
            {imgSrc: "../../img/moon.jpg", title: "About This Site", content: "See inside", link: "/projects"},
            {imgSrc: "../../img/moon.jpg", title: "About Cats", content: "See out cats", link:"/cats"}
            ];

        let panelItems = panelContent.map((el, i) => {
            return (
                <div className="col-md-6 col-xs-12">
                    <div className="panelItem">
                        <img className="leftAlign bounce-ball" src={el.imgSrc} />
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
                    {panelItems}
                </div>
            </div>
            </div>
        )
    }
}

