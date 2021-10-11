import * as React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setCategories} from "../../redux/categories-reducer";
import Categories from "./Categories";

class CategoriesContainer extends React.Component {


    constructor(props) {
        super(props);
      /*  //    this.props.setIsFetching(true);
        axios.get(`http://localhost:8082/category/all`)
            .then(response => {
                //             this.props.setIsFetching(false);
                debugger;
                this.props.setCategories(response.data)

                //this.props.setTotalElements(response.data.totalElements);

                console.log(response.data)

            });*/
    }

    componentDidMount() {
        axios.get(`http://localhost:8082/category/all`)
            .then(response => {
                //             this.props.setIsFetching(false);
                debugger;
                this.props.setCategories(response.data)

                //this.props.setTotalElements(response.data.totalElements);

                console.log(response.data)

            });

    }

    render() {
        console.log(this.props.categories)
        debugger;

        return <>

           {/* {this.props.isFetching ? <Preloader/> : null}*/}
            <Categories

                categories={ this.props.categories }
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.categoriesStat.categories
    }
}

export default connect(mapStateToProps, { setCategories })(CategoriesContainer);