import Template from '../view/Template';
import Zhuqing from '../components/zhuqing/Zhuqing';
import {Link, withRouter} from "react-router-dom";
export default class Resume extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Template>
                <Zhuqing />
            </Template>
        )
    }
}