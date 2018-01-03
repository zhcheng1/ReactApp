import FancyMenu from "../components/fancyMenu/FancyMenu";
import Template from '../view/Template';
export default class Construction extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Template>
                <FancyMenu/>
            </Template>
        )
    }
}