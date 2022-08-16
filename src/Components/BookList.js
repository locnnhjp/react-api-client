import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function BookList() {
    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect evoked!!!");
        axios
            .get(
                "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books"
            )
            .then((res) => {
                setBookList(res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }, [loading]);

    function handleCreate() {
        navigate("/book/add");
    }

    function handleEdit(bookID) {
        navigate(`/book/${bookID}`);
    }

    function handleDelete(bookID) {
        axios
            .delete(
                `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${bookID}`
            )
            .then((res) => {
                alert("Deleted!");
            })
            .catch((err) => console.log(err))
            .finally(() => {
                window.location.reload();
            });
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Library</h1>
            <button
                type="button"
                className="btn btn-success"
                onClick={handleCreate}
            >
                Add a new Book
            </button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Quanity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => handleEdit(book.id)}
                                >
                                    Edit
                                </button>{" "}
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(book.id)}
                                >
                                    Delele
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;
