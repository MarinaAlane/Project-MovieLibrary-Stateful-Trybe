import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);

  // HANDLER GENÉRICO
  // handleChange = ({ target }) => {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //   };
  // }
  // }

  render() {
    return (
      <section>
        <h2>My awesome movie library</h2>
        <SearchBar />
        <MovieList />
        {/* <MovieList movies={ this.props.movies } /> */}
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
