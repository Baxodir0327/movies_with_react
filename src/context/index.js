import React, {createContext, useReducer, useState} from "react";
import {v4 as id} from "uuid";

const initialValue = {
    data: [],
    term: '',
    filter: 'all',
}

export const Context = createContext('')
const reducer = (state = initialValue, action) => {
    const {type, payload} = action

    switch (type) {
        case "GET_DATE":
            return {...state, data: payload}

        case "ON_DELETE":
            const deleteArr = state.data.filter(c => c.id !== payload)
            return {...state, data: deleteArr}

        case "ON_TOGGLE_PROP":
            const newData = state.data.map(item => {
                if (item.id === payload.id) {
                    return {...item, [payload.prop]: !item[payload.prop]}
                }
                return item
            })
            return {...state, data: newData}

        case "ADD_FORM":
            const {name, viewers} = payload
            const newItem = {id: id(), name, viewers, favourite: false, like: false}
            return {...state, data: [...state.data, newItem]}

        case "ON_TERM":
            return {...state, term: payload}

        case "ON_FILTER":
            return {...state, filter: payload}

        default:
            return {state}

    }

}
const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue,)
    return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}
export default Provider;
