import style from "./_banner.scss";
export default class Banner extends React.Component {
    render() {
        return(
            <div className="banner">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-xs-12">
                            <div className="left-sec hover-effect">
                                <div className="content">
                                    <h1>We</h1>
                                    <h2>Develop</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="right-sec hover-effect">
                                <div className="content">
                                    <h1>We</h1>
                                    <h2>Build</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}