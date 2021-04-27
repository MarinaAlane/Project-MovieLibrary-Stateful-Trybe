import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import movies from '../data';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />
        <AddMovie />
        <MovieList movies={ movies } />
      </div>
    );
  }
}
// MovieLibrary.propTypes = {
//   movies: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     storyline: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     imagePath: PropTypes.string.isRequired,
//     bookmarked: PropTypes.Boolean.isRequired,
//     genre: PropTypes.string.isRequired,
//   })
// }
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
export default MovieLibrary;
