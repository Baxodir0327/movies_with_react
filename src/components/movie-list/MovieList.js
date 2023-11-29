import './MovieList.css'
import MovieListItem from "../move-list-item/MovieListItem";
import {useContext} from "react";
import {Context} from "../../context";
import {filterHandler, searchHandler} from "../../utilities/data";

const MovieList = () => {
    const {state} = useContext(Context)
    const data = filterHandler(searchHandler(state.data, state.term), state.filter)

    return <ul className='movie-list'>
        {data.map(item => (<MovieListItem key={item.id} {...item}/>))}
    </ul>
}

export default MovieList;