import Template from '../view/Template';
import PanelContainer from '../containers/PanelContainer';

export default class Resume extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Template>
                <PanelContainer route="cats"/>
            </Template>
        )
    }
}