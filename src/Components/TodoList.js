import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setTodos(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }, [todo]);

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        if (!todo.title) {
            alert("Please input todo");
        } else {
            axios
                .post("https://jsonplaceholder.typicode.com/todos", todo)
                .then((res) => {
                    alert(`Todo ${todo.title} is submitted!`);
                })
                .catch((err) => console(err))
                .finally(() => {
                    e.preventDefault();
                    setTodo({ title: "" });
                });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                name="title"
                value={todo.title}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={todo.completed ? "completed" : ""}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
