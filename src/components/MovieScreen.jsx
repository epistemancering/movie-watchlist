export default function MovieScreen(props) {
    let {list, movieList, page, setPage} = props
    let movieDisplay = movieList.map(function(value, index) {
        return <h2 key = {index}>
            {value.original_title}
        </h2>
    })
    return <div className = "page">
        <h1>
            Austin's Movie Theatre
        </h1>
        <h3>
            Add a movie to your watchlist
        </h3>
        <div className = "movie-container">
            {movieDisplay}
        </div>
    </div>
}