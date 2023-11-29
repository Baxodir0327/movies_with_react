import './SearchPanel.css'
import {Component, useContext, useState} from "react";
import {Context} from "../../context";

const SearchPanel = () => {
    const {dispatch} = useContext(Context)
    const [term, setTerm] = useState('')
    const updateTermHandler = (e) => {
        const term = e.target.value
        setTerm(term)
        dispatch({type: "ON_TERM", payload: term})
    }
    return <input type='text'
                  className='form-control search-input'
                  onChange={updateTermHandler}
                  value={term}
                  placeholder='Kinolarni qidirish'/>
}
export default SearchPanel;