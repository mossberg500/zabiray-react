import React from 'react';
import s from'./Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
        return (
            <div>
            <div className={s.headercon}>
                {/*<a href="/dialogitem">Dialogs</a>*/}
                <NavLink to="/dialogitem" activeClassName={s.active}>Dialogs</NavLink>
            </div>

            <div className={s.headercon}>

               {/* <a href="/offers">Offers</a>*/}
               <NavLink to="/offers" activeClassName={s.active}>Offers</NavLink>
            </div>
    </div>
        )
    };

export default Dialogs;
