import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../../assets/img/krasnyy.png";

class Users extends React.Component {


    /*  getUsers = () => {
          if (this.props.users.length === 0) {
              axios.get("http://localhost:8082/users/all")
                  .then(response => {
                      this.props.setUsers(response.data)
                  });
          }
      }
    */
    constructor(props) {
        super(props);
        axios.get("http://localhost:8082/users/all")
            .then(response => {
                this.props.setUsers(response.data)
            });

    }

    render() {
        return <div>
            {/* <button onClick={this.getUsers}>Get Users</button>*/}
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