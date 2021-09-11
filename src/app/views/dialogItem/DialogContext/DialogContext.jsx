import React from 'react';
import d from './../DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogContext = (props) => {
    let path = "/dialogitem/" + props.id;
    return (
        <div>
            <div className={d.dialog + ' ' + d.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
};

export default DialogContext;