import React from 'react';
import './Offer.css';


const Offer = (props) => {
    return(
        <div className='item'>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.categoryId}</td>
            <td>{props.supplierId}</td>
            <td>{props.date}</td>
            <td>
                <div className=" form-check">
                    <label className=" form-check-label">
                        <input className=" form-check-input" type=" checkbox" value=""></input>
                        <span className="form-check-sign">
                    <span className="check"></span>
                    </span>
                    </label>
                </div>
            </td>


        </div>

    )};

export  default Offer;
