import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:9000/api/users")
            .then((res) => {
                let users = res.data;
                setUsers(users);
            })
            .catch((error) => console.log(error));
    });

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;
