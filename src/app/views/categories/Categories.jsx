import React from 'react';
import './Categories.css';

import CategoryItem from "./categoryItem/CategoryItem";

const Categories = (props) => {
    return (
        <div className="sidebar" data-color="purple" data-background-color="white"
             data-image="/assets/img/sidebar-1.jpg">
            <div className="logo"><a href="#s" className="simple-text logo-normal">
                Creative Tim
            </a></div>
            <div className="sidebar-wrapper">
                <h4>тут категории из Categories </h4>
                <ul className="nav">

                    {
                        props.categories.map(off => <div key={off.id}>
                        <li
                            className="nav-item pointer">
                            <a className=" nav-link">
                               <CategoryItem id={ off.id }
                                             nameCategory={ off.nameCategory }
                                            />
                            </a>
                        </li>
                        </div>)
                    }
                </ul>
            </div>
        </div>


    )
};

export default Categories;
