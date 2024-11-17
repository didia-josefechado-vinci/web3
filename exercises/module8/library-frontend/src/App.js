import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Authors from './components/Authors';
import Books from './components/Books';
import AddBook from './components/AddBook';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <nav>
            <Link to="/authors">Authors</Link>
            <Link to="/books">Books</Link>
            <Link to="/add-book">Add Book</Link>
          </nav>
          <Routes>
            <Route path="/authors" element={<Authors />} />
            <Route path="/books" element={<Books />} />
            <Route path="/add-book" element={<AddBook />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;