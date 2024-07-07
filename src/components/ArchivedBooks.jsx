import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from '@mui/material';
import './ArchivedBooks.css';

const archivedBooks = [
  {
    bookID: '9495313',
    bookName: 'Basic Electronics Engineering',
    userID: '1001',
    personName: 'Tasha R',
    issuedDate: '09-03-2020',
    dateDue: '16-03-2020',
    dateReturned: '10-03-2020',
    status: '7',
    fine: '0',
    note: '-'
  }
];

const ArchivedBooks = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        View Issued Books History
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Book ID</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Person Name</TableCell>
              <TableCell>Issued Date</TableCell>
              <TableCell>Date Due</TableCell>
              <TableCell>Date Returned</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Fine</TableCell>
              <TableCell>Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {archivedBooks.map((book) => (
              <TableRow key={book.bookID}>
                <TableCell>{book.bookID}</TableCell>
                <TableCell>{book.bookName}</TableCell>
                <TableCell>{book.userID}</TableCell>
                <TableCell>{book.personName}</TableCell>
                <TableCell>{book.issuedDate}</TableCell>
                <TableCell>{book.dateDue}</TableCell>
                <TableCell>{book.dateReturned}</TableCell>
                <TableCell>{book.status}</TableCell>
                <TableCell>{book.fine}</TableCell>
                <TableCell>{book.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ArchivedBooks;
