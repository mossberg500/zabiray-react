import React from 'react';
import ListOfOffers from './listofoffers/ListOfOffers';
import Spinner2 from '../../common/Preloader/Spinner2';
import c from './LIstOffersFCatwgories.module.css'
import {NavLink} from "react-router-dom";

const ListOfOffersFCategories = (props) => {
    if(!props.totalElements) {
        return <Spinner2 />
    }
    //debugger;
    return (
        <div>
            <ul className="nav">

                {
                    <div>
                    <table className="table">
                        <tr className="tr">
                            <th className="th">id</th>

                            <th className="th">priceId</th>
                            <th className="th">name</th>
                            <th className="th">price</th>
                            <th className="th">category ID</th>
                            <th className="th">Фирма производитель</th>
                            <th className="th">picture</th>
                        </tr>
                        {props.offerscategory.map(off => <tr key={off.id}>

                            <td className="td">{off.id}</td>

                            <td className="td">{off.priceId}</td>
                            <NavLink to={'/offerdetail/' + off.id}
                            ><td className="td">{off.name}</td></NavLink>
                            <td className="td"><ListOfOffers price={ props.price } /> </td>
                            <td className="td">{off.categoryById}</td>
                            <td className="td">{off.vendor}</td>
                            <td className="td"><img className={c.img} src={off.picture} /></td>

                        </tr>)
                        }



                    </table>
                    </div>
                    /*/!*    props.offerscategory.map(off => <div key={off.id}>*!/
                    <li className="nav-item pointer">
                        <a className=" nav-link">
                           aaaaaaaaaa {props.offerscategory}
                        </a>
                    </li>*/
                }
            </ul>
        </div>
    )
}
export default ListOfOffersFCategories;
