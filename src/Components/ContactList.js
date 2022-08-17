import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
function ContactList() {
    const [contactList, setContactList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                "https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts"
            )
            .then((res) => {
                setContactList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    });

    function handleAdd() {
        navigate("/contact/add");
    }

    function handleEdit(contactID) {
        navigate(`contact/${contactID}`);
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="my-auto">Contacts</h1>
                <button className="btn btn-success m-2" onClick={handleAdd}>
                    Add Contact
                </button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contactList.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <button
                                    className="btn btn-primary mx-2"
                                    onClick={() => handleEdit(contact.id)}
                                >
                                    Edit
                                </button>
                                <button className="btn btn-danger mx-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;
