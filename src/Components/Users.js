import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Users() {
    const [users, setUsers] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/api/users")
        .then((res) => {
            setUsers(res.data);
        })
        .catch(error => console.log(error));
    });

    const handleCreate = () => {
        navigate("/user/add");
    }

    return(
        <div>
            <h1>Use</h1>
            {users.map(user => (
                <div key={user.id}>
                    <a href={`user/${user.id}`}>{user.name}</a>
                </div>
            ))}
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}

export default Users;
