import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setIsFetching,
    setPageNumber,
    setTotalElements,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.post(`http://localhost:8082/users/get?pageNumber=${this.props.pageNumber}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.content);
                this.props.setTotalElements(response.data.totalElements);

                console.log(response.data)
            });

    }

    onPageChanged = (pageNumber) => {
        this.props.setPageNumber(pageNumber);
        this.props.setIsFetching(true);
        axios.post(`http://localhost:8082/users/get?pageNumber=${pageNumber}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.content)
                console.log(response.data)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalElements={this.props.totalElements}
                   pageSize={this.props.pageSize}
                   pageNumber={this.props.pageNumber}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}


            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageNumber: state.usersPage.pageNumber,
        pageSize: state.usersPage.pageSize,
        totalElements: state.usersPage.totalElements,
        totalPages: state.usersPage.totalPages,
        isFetching: state.usersPage.isFetching

    }
}
/*

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setPageNumber: (pageNumber) => {
            dispatch(setPageNumberAC(pageNumber));
        },
        setTotalElements: (totalElements) => {
            dispatch(setTotalElementsAC(totalElements));
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}
*/

export default connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setUsers: setUsers,
        setPageNumber: setPageNumber,
        setTotalElements: setTotalElements,
        setIsFetching: setIsFetching

    })(UsersContainer);