import React from 'react';
import './IssuedBooks.css';
import issuedBooks from '../data/issuedBooks.json';

const IssuedBooks = () => {
//   const issuedBooks = [
//     {
//       action: 'Pay Due',
//       bookId: '9993497',
//       bookName: 'Advances in Mechanical and Electronic Engineering',
//       bookDesc: 'This book includes the volume 2 of the proceedings of...',
//       userId: '1001',
//       personName: 'Tasha R',
//       issuedDate: '09-01-2020',
//       dateDue: '16-01-2020',
//       daysToGo: '-1633',
//       status: 'Paid | Kindly submit the book to the library asap.',
//     },
//     {
//       action: 'Pay Due',
//       bookId: '5825189',
//       bookName: 'MORE Electronic Gadgets for the Evil Genius',
//       bookDesc: 'This much anticipated follow-up to the wildly popular cultclassic Electronic...',
//       userId: '1001',
//       personName: 'Tasha R',
//       issuedDate: '09-02-2020',
//       dateDue: '16-02-2020',
//       daysToGo: '-1602',
//       status: 'Paid | Kindly submit the book to the library asap.',
//     },
//   ];

  return (
    <div className="issued-books">
      <h2>My Issued Books List</h2>
      <table className="issued-books-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Book Desc</th>
            <th>User ID</th>
            <th>Person Name</th>
            <th>Issued Date</th>
            <th>Date Due</th>
            <th>Days To Go</th>
          </tr>
        </thead>
        <tbody>
          {issuedBooks.map((book, index) => (
            <tr key={index}>
              <td>
                <button className="btn">{book.action}</button>
              </td>
              <td>{book.bookId}</td>
              <td>{book.bookName}</td>
              <td>{book.bookDesc}</td>
              <td>{book.userId}</td>
              <td>{book.personName}</td>
              <td>{book.issuedDate}</td>
              <td>{book.dateDue}</td>
              <td>{book.daysToGo}</td>
              <td colSpan="9" style={{ textAlign: 'center', fontStyle: 'italic', color: 'green' }}>
                {book.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssuedBooks;