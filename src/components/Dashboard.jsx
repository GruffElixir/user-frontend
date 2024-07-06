import React, { useState, useEffect } from 'react';
import { Container, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import booksData from '../data/books.json';

const Dashboard = () => {
  const [searchName, setSearchName] = useState('');
  const [searchISBN, setSearchISBN] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  useEffect(() => {
    setFilteredBooks(
      booksData.filter((book) =>
        book.BookName.toLowerCase().includes(searchName.toLowerCase()) &&
        book.ISBN.includes(searchISBN)
      )
    );
  }, [searchName, searchISBN]);

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearchISBNChange = (event) => {
    setSearchISBN(event.target.value);
  };

  return (
    <Container>
      <h4>Dashboard</h4>
      <TextField
        label="Type Book Name"
        variant="outlined"
        fullWidth
        value={searchName}
        onChange={handleSearchNameChange}
        margin="normal"
      />
      <TextField
        label="Type ISBN"
        variant="outlined"
        fullWidth
        value={searchISBN}
        onChange={handleSearchISBNChange}
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ISBN</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell>Book Desc</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Borrowed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBooks.map((book) => (
              <TableRow key={book.ISBN}>
                <TableCell>{book.ISBN}</TableCell>
                <TableCell>{book.BookName}</TableCell>
                <TableCell>{book.BookDesc}</TableCell>
                <TableCell>{book.Category}</TableCell>
                <TableCell>{book.Price}</TableCell>
                <TableCell>{book.Qty}</TableCell>
                <TableCell>{book.Borrowed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;