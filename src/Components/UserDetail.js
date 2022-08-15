import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

function UserDetail() {
    const {userID} = useParams();
    const isCreate = !userID;
    const [user, setUser] = useState({});

    useEffect(() => {
        if(userID) {
            axios.get(`http://localhost:3001/api/users/${userID}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(error => console.log(error));
        }
    }, [userID])

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit() {
        axios.post("http://localhost:3001/api/users", user)
        .then(res => {
            alert(
                `${isCreate ? "Create" : "Edit"} user ${JSON.stringify(res.data)} successfully!!!`
            );
        })
        .catch(error => console.log(error));
    }

    return (
        <div>
            <h1>User details</h1>
            <form>
                <div>
                    <label>ID</label>
                    <input name="id" value={user.id || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" value={user.name || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Birthday</label>
                    <input type="date" name="birthday" value={user.birthday || ""} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UserDetail;