import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../../assets/img/krasnyy.png";

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.post(`http://localhost:8082/users/get?pageNumber=${this.props.pageNumber}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.content);
                this.props.setTotalElements(response.data.totalElements);

                    console.log(response.data)
            });

    }

    onPageChanged = (pageNumber) => {
        this.props.setPageNumber(pageNumber);
        axios.post(`http://localhost:8082/users/get?pageNumber=${pageNumber}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.content)
                console.log(response.data)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalElements / this.props.pageSize)
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <span>Где то тут циферки { pages.length }</span>
            <div>
                {pages.map(p => {
                     return <span className={this.props.pageNumber === (p) && styles.selectedPage}
                     onClick={ (e)=>{ this.onPageChanged(p); } }>  {p}  </span>
                    }
                )}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl != '' ? u.photoUrl : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                             <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>

    }

}

export default Users;