import './movies-add-form.css'
import {Component, useState} from "react";

const MoviesAddForm=({addForm}) => {
    const [state, setState] = useState({name: '', viewers: ''})
    const changeHandlerInput = (e) => setState({...state, [e.target.name]: e.target.value})
    const  addFormHandler = (e) => {
        e.preventDefault()
        if (state.name===''||state.viewers==='') return
        const data={name:state.name,viewers: state.viewers}
        addForm(data)
        setState({name: '',viewers: ''})
    }
    return (
        <div className='movies-add-form'>
            <h3>kinolar qoshish</h3>
            <form className='add-form d-flex' onSubmit={addFormHandler}>
                <input
                    type='text'
                    onChange={changeHandlerInput}
                    name={'name'}
                    value={state.name}
                    className='form-control'
                    placeholder='(Qanday kino)'/>
                <input
                    type='number'
                    onChange={changeHandlerInput}
                    name={'viewers'}
                    className='form-control new-post-lable'
                    placeholder='necha marta korilgan?'
                    value={state.viewers}
                />
                <button type={'submit'} className={'btn btn-outline-dark'}>Qo'shish
                </button>
            </form>
        </div>
    );

}

// const MoviesAddForm = () => {
//     return (
//         <div className='movies-add-form'>
//             <h3>kinolar qoshish</h3>
//             <form className='add-form d-flex'>
//                 <input type='text' className='form-control new-post-lable' placeholder='(Qanday kino)'/>
//                 <input type='text' className='form-control new-post-lable' placeholder='necha marta korilgan?'/>
//                 <button type={'submit'} className={'btn btn-outline-dark'}>
//                     Qo'shish
//                 </button>
//             </form>
//         </div>
//     );
// };

export default MoviesAddForm;