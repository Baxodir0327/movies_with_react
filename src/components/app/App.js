import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import './App.css';
import MovieList from "../movie-list/MovieList";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import {Component, Fragment} from "react";
import {v4 as id} from "uuid";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'Uzuklar Xukumdori', viewers: 800, favourite: false, like: false},
                {id: 2, name: 'Qashqirlar Makoni', viewers: 700, favourite: false, like: false},
                {id: 3, name: 'Shaytanat', viewers: 450, favourite: true, like: false},
                {id: 4, name: 'nimadur', viewers: 55, favourite: false, like: true},
                {id: 5, name: 'Ketomon', viewers: 550, favourite: true, like: false},
            ],
            term: '',
            filter:'all'
        }
    }

    onDelete = (id) => {
        this.setState(({data}) => ({data: data.filter(c => c.id !== id)}))
    }
    addForm = (item) => {
        const newItem = {id: id, name: item.name, viewers: item.viewers, favourite: false, like: false}
        this.setState(({data}) => ({data: [...data, newItem]}))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => {
                return {
                    data: data.map(item => {
                        if (item.id === id) {
                            return {...item, [prop]: !item[prop]}
                        }
                        return item
                    })
                }
            }
        )
    }

    searchHandler = (arr, term) => {
        if (term === null) {
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }

    updateTermHandler=(term)=>{this.setState({term})}

    filterHandler=(arr,filter)=>{
        switch (filter){
            case 'popular':
                return arr.filter(c=>c.like)
            case 'mostViewers':
                return arr.filter(c=>c.viewers>500)
            default:
                return arr
        }
    }
updateFilterHandler=(filter)=>{
this.setState({filter})
}
    render() {
        const {data,term,filter} = this.state
        const all = data.length
        const favourite = data.filter(c => c.favourite).length
        const visibleDat=this.filterHandler(this.searchHandler(data,term),filter)
        return (
            <div className='app font-monospace'>
                <div className='content'>
                    <AppInfo all={all} favourite={favourite}/>
                    <div className='search-panel'>
                        <SearchPanel updateTermHandler={this.updateTermHandler}/>
                        <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
                    </div>
                    <MovieList data={visibleDat} onDelete={this.onDelete} onToggleProp={this.onToggleProp}/>
                    <MoviesAddForm addForm={this.addForm}/>
                </div>
            </div>
        )
    }
}

export default App
