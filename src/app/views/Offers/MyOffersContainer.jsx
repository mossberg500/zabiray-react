import React from 'react';
import './Offers.css';
import {addNewOffersActionCreator, updateOffersActionCreator} from "../../redux/offer-reducer";
import Offers from "./Offers";

// Profile* MyPosts
const MyOffersContainer = (props) => {
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
};

export default MyOffersContainer;
