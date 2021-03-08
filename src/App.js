import React  from 'react';
import './App.css';
import MovieList from './components/movie-list/index.js';
import 'h8k-components';

const title = "Movie List";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <MovieList/>
    </div>
  );
}

export default App;
