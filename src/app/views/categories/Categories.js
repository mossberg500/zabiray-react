import React from 'react';
import './Categories.css';
import CategoryItem from "./categoryItem/CategoryItem";

const Categories = () => {
    return (
        <div className="sidebar" data-color="purple" data-background-color="white"
             data-image="/assets/img/sidebar-1.jpg">

            <div className="logo"><a href="#s" className="simple-text logo-normal">
                Creative Tim
            </a></div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li
                        className="nav-item pointer">
                        <a class=" nav-link">
                            <p><CategoryItem/></p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>


    )
};

export default Categories;
