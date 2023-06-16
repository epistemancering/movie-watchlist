import react from "react"
import axios from "axios"
import './App.css';
import Header from "./components/Header"
import MovieScreen from "./components/MovieScreen"
import Watchlist from "./components/Watchlist"
function App() {
  function getData() {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page[0]}`).then(function(response) {
      movieList[1](response.data.results)
    })
  }
  function addMovie(movie) {
    setList([...list, movie])
  }
  function removeMovie(movie) {
    let newState = list.filter(function(value) {
      return value !== movie
    })
    setList(newState)
  }
  let page = react.useState(1)
  react.useEffect(getData, [page[0]])
  let movieList = react.useState([])
  let [ list, setList ] = react.useState([])
  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen movieList = {movieList[0]} page = {page[0]} setPage = {page[1]} list = {list} addMovie = {addMovie} removeMovie = {removeMovie} />
        <Watchlist list = {list} removeMovie = {removeMovie} />
      </main>
    </div>
  );
}

export default App;
