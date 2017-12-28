import style from './_fancyMenu.scss';
import CircularMotion from '../circularMotion/CircularMotion';
import FancyMenuItem from './FancyMenuItem';

export default class FancyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            show: false,
            typeText: "CSS Effects Rock!!!",
            typeStyle: {}
        }
        this.toggleClass = this.toggleClass.bind(this);
        this.showMenuLink = this.showMenuLink.bind(this);
    }

    toggleClass() {
        let currActive = this.state.active;
        this.setState({
            active: true
        })
    }

    showMenuLink() {
        let {show} = this.state;
        this.setState({
            show: true
        })
    }

    render() {
        let menuItems = [{'text': 'home', 'link': '/'},
                        {'text': 'home', 'link': '/'},
                        {'text': 'home', 'link': '/'},
                        {'text': 'home', 'link': '/'}];
        menuItems = menuItems.map((item, key) => {
            return (
                <FancyMenuItem prefix="dd" index={key} item={item.text} link={item.link} key={key}/>
            )
        })

        const currActive = this.state.active ? 'active' : '';
        const menuContainerClasses = `${currActive} menuContainer`;



        return (
            <div className="fancyMenu star">
                <div className="twinkling">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-6">

                            <h3 className="menuText tada animated">Click the Moon!</h3>

                        </div>
                        <div className="col-4">
                            <div className={menuContainerClasses} onClick={this.toggleClass}>
                                {menuItems}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <CircularMotion />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}