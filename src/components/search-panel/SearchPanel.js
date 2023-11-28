import './SearchPanel.css'
import {Component, useState} from "react";

const SearchPanel = (props) => {
    const [term, setTerm] = useState('')
    const updateTermHandler = (e) => {
        const term = e.target.value
        setTerm(term)
        props.updateTermHandler(term)
    }
    return <input type='text'
                  className='form-control search-input'
                  onChange={updateTermHandler}
                  value={term}
                  placeholder='Kinolarni qidirish'/>
}
export default SearchPanel;