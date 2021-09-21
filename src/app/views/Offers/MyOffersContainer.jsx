import React from 'react';
import './Offers.css';
import {addNewOffersActionCreator, updateOffersActionCreator} from "../../redux/offer-reducer";
import Offers from "./Offers";
import {connect} from "react-redux";


// Profile* MyPosts
/*const MyOffersContainer = (props) => {
    let state = props.store.getState();


    let addOffer = () => {
          props.store.dispatch(addNewOffersActionCreator());
    }

    let onOfferChange = (text) => {
              let action = updateOffersActionCreator(text);
              props.store.dispatch( action )
    }

    return ( <Offers updateNewOffersName={ onOfferChange } addOffer={ addOffer }
                     offerStat={state.offerStat}
                     newOffersName={state.newOffersName}
    />)
};*/

// Profile* MyPosts
const mapStateToProps = (state) => {
    return{
        offerStat: state.offerStat,
        newOffersName: state.offerStat.newOffersName
    }
}
const  mapStateToDispatch = (dispatch) => {
    return{
        updateNewOffersName: (text) => {
            let action = updateOffersActionCreator(text);
            dispatch( action );
        },
        addOffer: () => {
            dispatch(addNewOffersActionCreator());
        }
    }
}

const MyOffersContainer = connect(mapStateToProps, mapStateToDispatch) (Offers);

export default MyOffersContainer;
