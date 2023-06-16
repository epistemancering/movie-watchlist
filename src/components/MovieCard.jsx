export default function MovieCard(props) {
    let { movie, addMovie, removeMovie } = props
    let inWatchlist = props.list.filter(function(value) {
        return value.id === movie.id
    })
    let button = inWatchlist.length === 0 ? <button onClick = {function() {
        addMovie(movie)
    }}>
        Add to List
    </button> : <button onClick = {function() {
        removeMovie(movie)
    }}>
        Remove
    </button>
    return <div className = "movie-card">
        <div>
            <img alt = "" src = {`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            <h3>
                {movie.original_title}
            </h3>
        </div>
        {button}
    </div>
}