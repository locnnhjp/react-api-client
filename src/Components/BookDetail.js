import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function BookDetail() {
    const [book, setBook] = useState({});
    const { bookID } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (bookID) {
            axios
                .get(
                    `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${bookID}`
                )
                .then((res) => setBook(res.data))
                .catch((err) => console.log(err))
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [loading]);

    function handleChange(e) {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit() {
        if (bookID) {
            axios
                .patch(
                    `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${bookID}`,
                    book
                )
                .then((res) => {
                    alert("Submitted!!!");
                    navigate("/");
                })
                .catch((err) => console.log(err));
        } else {
            axios
                .post(
                    "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books",
                    book
                )
                .then((res) => {
                    alert("Submitted!!!");
                    navigate("/");
                })
                .catch((err) => console.log(err));
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Edit</h1>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="titleHelp"
                        placeholder="Enter title"
                        name="title"
                        value={book.title || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        aria-describedby="titleHelp"
                        placeholder="Enter quantity"
                        name="quantity"
                        value={book.quantity || ""}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default BookDetail;
