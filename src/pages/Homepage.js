import Banner from '../components/banner/Banner';
import Panel from '../components/panel/Panel';
import Template from '../view/Template';
export default class Homepage extends React.Component {

    render() {
        return (
            <Template>
                <Banner/>
                <Panel />
            </Template>
        )
    }
}