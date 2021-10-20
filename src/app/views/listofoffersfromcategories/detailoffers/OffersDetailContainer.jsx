import React from "react";
import OffersDetail from "./OffersDetail";
import * as axios from "axios";
import {connect} from "react-redux";
import {setOfferDetail} from "../../../redux/offersdetail-reducer";
import {withRouter} from "react-router-dom";

class OffersDetailContainer extends React.Component {

    componentDidMount() {
        let offId = this.props.match.params.offId;

        axios.get(`http://localhost:8082/offer/id/` + offId)
            .then(response => {
                //             this.props.setIsFetching(false);
                debugger;
                this.props.setOfferDetail(response.data)
                //this.props.setTotalElements(response.data.totalElements);
                console.log(response.data)
            });

    }

    render() {
        return (
            <OffersDetail {...this.props} offersDetail={this.props.offersDetail} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        offersDetail: state.offersDetailStat
    } // круглые скобки говорят что возращается объект, а не тело стрелочной функции
};

let withUrlContainerOffersDetail =  withRouter(OffersDetailContainer);

export default connect(mapStateToProps, { setOfferDetail })(withUrlContainerOffersDetail);
