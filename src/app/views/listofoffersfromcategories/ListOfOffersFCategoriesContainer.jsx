import * as React from "react";
import ListOfOffersFCategories from "./ListOfOffersFCategories";
import * as axios from "axios";
import {connect} from "react-redux";
import {setOffersCategory, setPageNumber, setTotalElements} from "../../redux/listofferscategories-reducer";
import {setIsFetching} from "../../redux/users-reducer";
import withRouter from "react-router-dom/es/withRouter";

class ListOfOffersFCategoriesContainer extends React.Component {

    body = {
        name: '',
        price: '',
        categoryId: this.props.match.params.categId,
        supplierId: '',
        pageNumber: 0,
        pageSize: 5
    }

    componentDidUpdate(prevProps,prevState) {
      //  console.log(this.props.match.params.categId)
        if (prevProps.match.params.categId !== this.props.match.params.categId) {
            // шлете запрос с новым userId = nextProps.match.params.userId

            this.body.categoryId = this.props.match.params.categId
            console.log(this.props.match.params.categId + "  " + prevProps.match.params.categId)
            console.log("обновляем")
            axios({
                method: 'post',
                url: `http://localhost:8082/offer/search`,
                data: this.body
            })
                .then(response => {
                    // debugger;
                    console.log(response.data)
                    this.props.setOffersCategory(response.data.content);
                    this.props.setTotalElements(response.data.totalElements);

                });

        }
    }



    componentDidMount() {
        console.log(this.props.match.params.categId)

        //   this.props.setIsFetching(true);
        axios({
            method: 'post',
            url: `http://localhost:8082/offer/search`,
            data: this.body
        })
                .then(response => {
               // debugger;
                console.log(response.data)
                this.props.setOffersCategory(response.data.content);
                this.props.setTotalElements(response.data.totalElements);

            });

    }

    render() {
        return <>

            <ListOfOffersFCategories {...this.props}

                                     totalElements={this.props.totalElements}
                                     pageSize={this.props.pageSize}
                                     pageNumber={this.props.pageNumber}
                                     offerscategory={this.props.offerscategory}


            />
        </>
    }

}


let mapStateToProps = (state) => {
    return {
        offerscategory: state.listOfOffersFCategoriesStat.offerscategory,
        pageNumber: state.listOfOffersFCategoriesStat.pageNumber,
        pageSize: state.listOfOffersFCategoriesStat.pageSize,
        totalElements: state.listOfOffersFCategoriesStat.totalElements,
        totalPages: state.listOfOffersFCategoriesStat.totalPages,


    }
};

/*

Так как по данному роуту рендериться один и тот же компонент, не происходит его размонитрования из dom при смене url.
    Поэтому вам стоит добавить метод componentDidUpdate в котором вы будете сравнивать:
    ...
componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
        // шлете запрос с новым userId = nextProps.match.params.userId
    }
}
*/



let WithUrlDataOffersFCategoriesContainer = withRouter(ListOfOffersFCategoriesContainer);

export default connect(mapStateToProps, {
    setOffersCategory,
    setPageNumber,
    setTotalElements,
    setIsFetching

})(WithUrlDataOffersFCategoriesContainer);