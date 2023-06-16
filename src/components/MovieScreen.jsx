import MovieCard from "./MovieCard"
export default function MovieScreen(props) {
    function decrement() {
        page !== 1 && setPage(page - 1)
    }
    function increment() {
        setPage(page + 1)
    }
    let {movieList, page, setPage, list, addMovie} = props
    let movieDisplay = movieList.map(function(value, index) {
        return <MovieCard key = {index} list = {list} movie = {value} addMovie = {addMovie} removeMovie = {props.removeMovie} />
    })
    return <div className = "page">
        <h1>
            Austin's Movie Theatre
        </h1>
        <h3>
            Add a movie to your watchlist
        </h3>
        <div className = "btn-container">
            <button onClick = {decrement}>
                Previous
            </button>
            <button onClick = {increment}>
                Next
            </button>
        </div>
        <div className = "movie-container">
            {movieDisplay}
        </div>
    </div>
}