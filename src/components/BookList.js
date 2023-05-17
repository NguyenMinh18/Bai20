import React from 'react';
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
    const listItems = books.map((book) => (
        <BookShow onEdit={onEdit} onDelete={onDelete} book={book} />
    ));
    return <div className="list-books">
        <h2>Reading List</h2>
        {listItems}
        </div>
}
export default BookList;





// import React, { useContext } from "react";
// import BookShow from "./BookShow";
// import BooksContext from "../context/books";

// const BookList = ({ books, onDelete, onEdit }) => {
//     const listItems = books.map((book) => (
//         <BookShow onEdit={onEdit}
//             onDelete={onDelete}
//             book={book} />
//     ));
//     const {count, incrementCount} = useContext(BooksContext);
//     return (
//         <div className="list-books">
//             <h2>Reading List</h2>
//             {count}
//             <button onClick={incrementCount}>Tăng Count</button>
//             {listItems}
//         </div>
//     );
// };
// export default BookList;