import React from 'react';
import classes from './CategoryItem.module.css'
import {NavLink} from "react-router-dom";

const CategoryItem = (props) => {
  //  debugger;

    return (
        <div>
            <NavLink to={'/categories/' + props.id} >
            {
        <div className={`${classes.item} ${classes.active}`}>
            { props.id } { props.nameCategory }
                    </div>
            }
            </NavLink>
        </div>
    )

};

export default CategoryItem;
