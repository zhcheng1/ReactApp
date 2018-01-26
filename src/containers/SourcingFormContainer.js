import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SourcingForm from "../components/sourcingForm/SourcingForm"
class SourcingFormContainer extends React.Component {
    constructor() {
        super();
        let formData =  {
            pages: [
                {
                    "page" : [
                        {
                            title: "Title/Expertise",
                            formValue:["skill1", "skill2"]
                        },

                        {
                            title: "Excluded from Current Title",
                            formValue:[]
                        }
                    ]
                },
                {
                    "page" : [
                        {
                            title: "Title2",
                            formValue:[]
                        },

                        {
                            title: "skill2",
                            formValue:[]
                        }
                    ]
                },
                {
                    "page" : [
                        {
                            title: "Title3",
                            formValue:[]
                        },

                        {
                            title: "skill3",
                            formValue:[]
                        }
                    ]
                },

            ]};

        this.state = {
            page: 0,
            formData: formData
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    handlePageChange(e, pageNum) {
        if(pageNum == -1) {

            if(this.state.page >= 1) {
                let newPage = this.state.page - 1;
               this.setState ({
                   page: newPage
               })
            }
        }else if(pageNum == 1) {
            if(this.state.page < this.state.formData.pages.length - 1) {
                let newPage = this.state.page + 1;
                this.setState ({
                    page: newPage
                })
            }
        }
    }
    render() {



        //let {formData} = this.props;

        return (
            <div className="sourcingForm" >
                <SourcingForm formData={this.state.formData.pages[this.state.page].page} handlePageChange={this.handlePageChange} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({

    }, dispatch);
};

export default SourcingFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SourcingFormContainer);