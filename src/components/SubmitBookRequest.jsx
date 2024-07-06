import React, { useState, useEffect } from "react";
import "./SubmitBookRequest.css";
import submittedBooksData from "../data/submittedBooks.json";
const SubmitBookRequest = () => {
	const [bookName, setBookName] = useState("");
	const [bookUrl, setBookUrl] = useState("");
	const [note, setNote] = useState("");
	const [submittedBooks, setSubmittedBooks] = useState(submittedBooksData);

	const handleSubmit = (event) => {
		event.preventDefault();
		const newBookRequest = {
			bookName,
			url: bookUrl,
			bookDesc: note,
			personName: "Tasha R",
			likes: 1,
			addedOn: new Date().toISOString().split("T")[0],
		};
		setSubmittedBooks([...submittedBooks, newBookRequest]);
		setBookName("");
		setBookUrl("");
		setNote("");
		// Normally, here you would also send the new request to the server
	};

	return (
		<div className="submit-book-request">
			<h2>Submit Book Request</h2>
			<form onSubmit={handleSubmit} className="book-request-form">
				<div className="form-group">
					<label htmlFor="bookName">Book Name *</label>
					<input
						type="text"
						id="bookName"
						value={bookName}
						onChange={(e) => setBookName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="bookUrl">Google/Amazon Book Url</label>
					<input
						type="url"
						id="bookUrl"
						value={bookUrl}
						onChange={(e) => setBookUrl(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="note">Note *</label>
					<textarea
						id="note"
						value={note}
						onChange={(e) => setNote(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className="btn">
					Submit Request
				</button>
			</form>
			<table className="submitted-books-table">
				<thead>
					<tr>
						<th>Book Name</th>
						<th>Url</th>
						<th>BookDesc</th>
						<th>Person Name</th>
						<th>Likes (30)</th>
						<th>Added On</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{submittedBooks.map((book, index) => (
						<tr key={index}>
							<td>{book.bookName}</td>
							<td>
								<a href={book.url} target="_blank" rel="noopener noreferrer">
									Visit
								</a>
							</td>
							<td>{book.bookDesc}</td>
							<td>{book.personName}</td>
							<td>{book.likes}</td>
							<td>{book.addedOn}</td>
							<td>
								<button className="btn-action">👍</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SubmitBookRequest;
