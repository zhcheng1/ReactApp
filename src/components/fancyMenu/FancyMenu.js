import style from './fancyMenu.scss';

import FancyMenuItem from './FancyMenuItem';
export default class FancyMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
            show: false,
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
        let menuItems = [{'text' :'home', 'link' : '/'},
            {'text' :'home', 'link' : '/'},
            {'text' :'home', 'link' : '/'},
            {'text' :'home', 'link' : '/'}];
        menuItems = menuItems.map((item, key) => {
            return (
                <FancyMenuItem prefix="dd" index={key} item={item.text} link ={item.link} key={key} />
            )
        })

        const currActive = this.state.active ? 'active' : '';
        const menuContainerClasses = `${currActive} menuContainer`;

        return (
            <div className="fancyMenu">
                <h3 className="menuText tada animated">Click the Moon!</h3>
                <div className={menuContainerClasses} onClick={this.toggleClass}>
                    {menuItems}
                </div>
            </div>
        )
    }
}