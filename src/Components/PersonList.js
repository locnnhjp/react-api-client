import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function PersonList() {
    const [personList, setPersonList] = useState([]);
    const [name, setName] = useState();
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                const personList = res.data;
                setPersonList(personList);
            })
            .catch((error) => console.log(error));
    });

    const handleChange = event => {
        let name = event.target.value;
        console.log(name);
        setName(name);
    };

    const handleSubmit = () => {
        const user = {
            name: name,
        };
        axios
            .post("https://jsonplaceholder.typicode.com/users", user)
            .then((res) => {
                console.log("OK")
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <form>
                <label>
                    Person Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <button onClick={() => handleSubmit()}>Add</button>
            </form>
            <hr />
            <ul>
                {personList.map((person) => (
                    <li>{person.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PersonList;
