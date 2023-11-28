import './MovieList.css'
import MovieListItem from "../move-list-item/MovieListItem";

const MovieList = ({data,onDelete,onToggleProp}) => {
    return <ul className='movie-list'>
        {data.map(item => (
            <MovieListItem
                key={item.id}
                {...item}
                onDelete={()=>onDelete(item.id)}
                onToggleProp={(e)=>onToggleProp(item.id,e.currentTarget.getAttribute('data-toggle'))}
                favourite={item.favourite}
                like={item.like}
            />
        ))}

    </ul>
}

export default MovieList;