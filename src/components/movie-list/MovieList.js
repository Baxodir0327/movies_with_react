import './MovieList.css'
import MovieListItem from "../move-list-item/MovieListItem";

const MovieList = ({data, onDelete, onToggleProp}) => {
    return <ul className='movie-list'>
        {data.map(item => (
            <MovieListItem
                key={item.id}
                {...item}
                onDelete={() => onDelete(item.id)}
                onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
            />
        ))}

    </ul>
}

export default MovieList;