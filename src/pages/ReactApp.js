import Template from '../view/Template';
//import Timer from "../components/timer/Timer";
import ShareFareContainer from "../containers/ShareFareContainer";

export default class ReactApp extends React.Component {

    render() {
        return (
            <Template>
                <ShareFareContainer />
            </Template>
        )
    }
}