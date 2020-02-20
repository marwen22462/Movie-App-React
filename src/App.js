import React, { Component } from "react";
import "./App.css";
import Search from "./component/Search";
import MovieList from "./component/MovieList";
import RatingFilter from './component/RatingFilter'


let movies = [
  {
    title: "Avengers END GAME",
    rating: 5,
    image: "https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg"
  },
  {
    title: "Mission Impossible 4",
    rating: 4,
    image:
      "https://fr.web.img3.acsta.net/medias/nmedia/18/85/51/98/19843153.jpg"
  },
  {
    title: "Fast & Furious 8",
    rating: 3,
    image:
      "https://sergetisseron.com/wp-content/uploads/2018/03/fast-furious-8-92720-670x949.jpg"
  }
];
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRating: 1,
      moviesArray: movies,
      titleSearch: ""
    }
  }
  addNewMovie(newMovie) {
    this.setState({
      ...this.state,
      moviesArray: [...this.state.moviesArray, newMovie]
    });
  }

render() {
  return (
    <div className="App">
      <Search value={this.state.titleSearch}
          onChange={newTitle => {
            this.setState({
              titleSearch: newTitle
            });
          }}
          />
      <RatingFilter className="rating"
          etoile={this.state.minRating}
          onChange={newRating => {
            this.setState({
              minRating: newRating
            });
          }}
          />
      <MovieList movies={this.state.moviesArray.filter(
            el =>
              el.rating >= this.state.minRating &&
              el.title
                .trim()
                .toLowerCase()
                .includes(this.state.titleSearch.trim().toLowerCase())
          )}
          onAddMovie={newMovie => this.addNewMovie(newMovie)} />
      
      
    </div>
    
  );
}
}
export default App;
