import React from 'react';
import classes from './CategoryItem.module.css'

const CategoryItem = (props) => {
    debugger;
    return (
        <div>
            {
        <div className={`${classes.item} ${classes.active}`}>
                        <h2>{ props.nameCategory }</h2>
                    </div>
            }
        </div>
    )

};

export default CategoryItem;
