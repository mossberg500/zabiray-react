import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import od from './OffersDetailContainer.module.css'

const OffersDetail = (props) => {

    if (!props.offersDetail) {
        return <Preloader />

    }
    debugger;
    return (
        <div>
            <img className={od.img} src={props.offersDetail.offerDetail.picture}/>
            <p>наименование:  {props.offersDetail.offerDetail.name}</p>
            <p>Доступность:  <span> {props.offersDetail.offerDetail.available}</span></p>
            <p>Категория:    <span> {props.offersDetail.offerDetail.category}</span></p>
            <p>Продавец:     <span> {props.offersDetail.offerDetail.supplier}</span></p>
            <p>Произодитель: <span> {props.offersDetail.offerDetail.vendor}</span></p>

        </div>
    )
}
export default OffersDetail;
