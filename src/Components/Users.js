import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    let navigate = useNavigate();
    useEffect(() => {
        const getUsers = axios.get("http://localhost:3001/api/users");
        const getArticles = axios.get("http://localhost:3001/api/articles");
        axios
            .all([getUsers, getArticles])
            .then(
                axios.spread((res1, res2) => {
                    const users = res1.data.map((user) => {
                        return {
                            ...user,
                            article: res2.data.filter((item) => {
                                return item.user_id === user.id;
                            }),
                        };
                    });
                    setUsers(users);
                })
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }, [loading]);

    const getUsers = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                axios.get("http://localhost:3001/api/users");
                // .then((res) => resolve(res))
                // .catch((err) => reject(err));
            }, 1000);
        });
    };

    const getArticles = () => {
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:3001/api/articles");
            // .then((res) => resolve(res))
            // .catch((err) => reject(err));
        });
    };

    const handleCreate = () => {
        navigate("/user/add");
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <a href={`user/${user.id}`}>{user.name}</a>
                    <p>{user.article.length}</p>
                </div>
            ))}
            <button onClick={handleCreate}>Create</button>
        </div>
    );
}

export default Users;
