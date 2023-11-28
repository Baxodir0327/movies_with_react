import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import './App.css';
import MovieList from "../movie-list/MovieList";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import {Component, useState} from "react";
import {v4 as id} from "uuid";

const App = () => {
    const [data, setData] = useState(arr)
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('all')

    const onDelete = (id) => {
        setData(data.filter(c => c.id !== id))
    }
    const addForm = (item) => {
        const newItem = {id: id, name: item.name, viewers: item.viewers, favourite: false, like: false}
        setData([...data, newItem])
    }

    const onToggleProp = (id, prop) => {
        setData(data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        )
    }

    const   searchHandler = (arr, term) => {
        if (term === null) {
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }
   const updateTermHandler = term => setTerm(term)

    const  filterHandler = (arr, filter) => {
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like)
            case 'mostViewers':
                return arr.filter(c => c.viewers > 500)
            default:
                return arr
        }
    }
   const updateFilterHandler = filter => setFilter(filter)
    return (
        <div className='app font-monospace'>
            <div className='content'>
                <AppInfo all={data.length} favourite={data.filter(c => c.favourite).length}/>
                <div className='search-panel'>
                    <SearchPanel updateTermHandler={updateTermHandler}/>
                    <AppFilter filter={filter} updateFilterHandler={updateFilterHandler}/>
                </div>
                <MovieList data={filterHandler(searchHandler(data,term),filter)} onDelete={onDelete} onToggleProp={onToggleProp}/>
                <MoviesAddForm addForm={addForm}/>
            </div>
        </div>
    )
}
const arr = [
    {id: 1, name: 'Uzuklar Xukumdori', viewers: 800, favourite: false, like: false},
    {id: 2, name: 'Qashqirlar Makoni', viewers: 700, favourite: false, like: false},
    {id: 3, name: 'Shaytanat', viewers: 450, favourite: true, like: false},
    {id: 4, name: 'nimadur', viewers: 55, favourite: false, like: true},
    {id: 5, name: 'Ketomon', viewers: 550, favourite: true, like: false},
]

export default App
