import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../../assets/img/krasnyy.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalElements / props.pageSize)
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <span>Где то тут циферки {pages.length}</span>
        <div>
            {pages.map(p => {
                    return <span className={props.pageNumber === (p) && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>  {p}  </span>
                }
            )}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl != '' ? u.photoUrl : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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

export default Users;