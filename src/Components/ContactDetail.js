import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export function ContactDetail() {
    const { contactID } = useParams();
    const [contact, setContact] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (contactID) {
            axios
                .get(
                    `https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${contactID}`
                )
                .then((res) => {
                    setContact(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setLoading(false);
    }, [loading]);

    function handleChange(e) {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit() {
        if (contactID) {
            axios
                .put(
                    `https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${contactID}`
                )
                .then((res) => {
                    alert("Updated!");
                    navigate("/");
                })
                .catch((err) => console.log(err));
        } else {
            axios
                .post(
                    "https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts"
                )
                .then((res) => {
                    alert("Added!");
                    navigate("/");
                })
                .catch((err) => console.log(err));
        }
    }
    return (
        <div>
            <h1>{contactID ? "Edit" : "Add"}</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={contact.email}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={contact.phone}
                    />
                </div>

                <button className="btn btn-primary" onClick={handleSubmit}>
                    {contactID ? "Save" : "Add"}
                </button>
            </form>
        </div>
    );
}
