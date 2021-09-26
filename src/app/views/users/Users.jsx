import React from "react";
import styles from './Users.module.css'
import * as axios from 'axios'

let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("http://localhost:8082/users/all")
                .then(response => {

                    props.setUsers(response.data)
                });
        }
    }
    return <div>
        <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => {props.unfollow(u.id)} } >Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)} } >Follow</button> }
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
export default Users;