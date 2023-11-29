import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import './App.css';
import MovieList from "../movie-list/MovieList";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../context";

const App = () => {
    const [data, setData] = useState([])
    const {dispatch} = useContext(Context)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                const newArr = json.map(item => ({
                    name: item.title,
                    id: item.id,
                    viewers: Math.floor(Math.random() * 100),
                    favourite: false,
                    like: false,
                }))
                setData(newArr)
                dispatch({type: "GET_DATE", payload: newArr})
            })
    }, []);

    return (
        <div className='app font-monospace'>
            <div className='content'>
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MovieList/>
                <MoviesAddForm/>
            </div>
        </div>
    )
}
// const arr = [
//     {id: 1, name: 'Uzuklar Xukumdori', viewers: 800, favourite: false, like: false},
//     {id: 2, name: 'Qashqirlar Makoni', viewers: 700, favourite: false, like: false},
//     {id: 3, name: 'Shaytanat', viewers: 450, favourite: true, like: false},
//     {id: 4, name: 'nimadur', viewers: 55, favourite: false, like: true},
//     {id: 5, name: 'Ketomon', viewers: 550, favourite: true, like: false},
// ]

export default App
