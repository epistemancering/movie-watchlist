import react from "react"
import axios from "axios"
import './App.css';
import Header from "./components/Header"
import MovieScreen from "./components/MovieScreen"
function App() {
  function getData() {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`).then(function(response) {
      movieList[1](response.data.results)
    })
  }
  let page = react.useState(1)
  react.useEffect(getData, [page[0]])
  let movieList = react.useState([])
  let watchlist = react.useState([])
  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen list = {watchlist[0]} movieList = {movieList[0]} page = {page[0]} setPage = {page[1]} />
      </main>
    </div>
  );
}

export default App;
