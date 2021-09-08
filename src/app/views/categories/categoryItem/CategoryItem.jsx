import React from 'react';
import classes from './CategoryItem.module.css'

const CategoryItem = () => {
    return (
        <div>
            <div className={ `${classes.item} ${classes.active}` }>
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
            <div className={classes.item}>
                <h2>Setting</h2>
            </div>
            <div className={classes.item}>
                <h2>Setting1</h2>
            </div>
            <div className={classes.item}>
                <h2>Setting2</h2>
            </div>
            <div className={classes.item}>
                <h2>Setting3</h2>
            </div>
            <div className={classes.item}>
                <h2>Setting4</h2>
            </div>
            <div className={classes.item}>
                <h2>Setting5</h2>
            </div>
            <div className={classes.item}>
                <h2>Setting6</h2>
            </div>
            <div className={classes.item}>
                <h2>Setting7</h2>
            </div>


        </div>
    )
};

export default CategoryItem;
