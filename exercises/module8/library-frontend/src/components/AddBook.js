import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { ALL_AUTHORS } from './Authors';
import { ALL_BOOKS } from './Books';

const ADD_BOOK = gql`
  mutation addBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
    addBook(title: $title, author: $author, published: $published, genres: $genres) {
      title
      author
    }
  }
`;

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [genres, setGenres] = useState('');
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: ALL_AUTHORS }, { query: ALL_BOOKS }],
  });

  const submit = async (event) => {
    event.preventDefault();

    await addBook({
      variables: { title, author, published: parseInt(published), genres: genres.split(',') },
    });

    setTitle('');
    setAuthor('');
    setPublished('');
    setGenres('');
  };

  return (
    <div>
      <h2>Add a new book</h2>
      <form onSubmit={submit}>
        <div>
          Title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          Published
          <input
            type="number"
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          Genres (comma separated)
          <input
            value={genres}
            onChange={({ target }) => setGenres(target.value)}
          />
        </div>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;