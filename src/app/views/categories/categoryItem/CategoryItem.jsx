import React from 'react';
import classes from './CategoryItem.module.css'

const CategoryItem = () => {
    return (
        <div>
            <div className={classes.item}>
                <h2>Profile</h2>
            </div>
            <div className={classes.item}>
                <h2>Messages</h2>
            </div>
            <div className={classes.item}>
                <h2>News</h2>
            </div>
            <div className={classes.item}>
                <h2>Music</h2>
            </div>
            <div className={classes.item}>
                <h2>Setting</h2>
            </div>


        </div>
    )
};

export default CategoryItem;
