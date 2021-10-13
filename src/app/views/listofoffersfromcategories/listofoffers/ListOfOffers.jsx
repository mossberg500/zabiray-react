import React from "react";
import Preloader from "../../../common/Preloader/Preloader";

const ListOfOffers = (props) => {
    if(!props.price) {
        return <Preloader />
    }

    return(
        <div>
            Im ListOfOffers { props.price.id }
        </div>
    )
}
export default ListOfOffers;