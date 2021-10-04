import React from "react";

import { connect } from "react-redux";
import {followAC, setPageNumberAC, setTotalElementsAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageNumber: state.usersPage.pageNumber,
        pageSize: state.usersPage.pageSize,
        totalElements: state.usersPage.totalElements,
        totalPages: state.usersPage.totalPages

    }
}
let mapDispatchToProps = (dispatch) => {
    return{
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);