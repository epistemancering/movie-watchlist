import MovieCard from "./MovieCard"
export default function Watchlist(props) {
    let { list } = props
    let movieDisplay = list.map(function(value, index) {
        return <MovieCard key = {index} list = {list} movie = {value} removeMovie = {props.removeMovie} />
    })
    return <div className = "watchlist">
        <h1>
            My Watchlist
        </h1>
        <div className = "movie-container">
            {movieDisplay}
        </div>
    </div>
}