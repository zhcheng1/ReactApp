import Banner from '../components/banner/Banner';
import PanelContainer from '../containers/PanelContainer';
import Template from '../view/Template';
export default class Homepage extends React.Component {

    render() {
        return (
            <Template>
                <Banner/>
                <PanelContainer />
            </Template>
        )
    }
}