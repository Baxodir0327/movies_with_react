import './movies-add-form.css'
import {Component} from "react";


class MoviesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            viewers: ''
        }
    }

    changeHandlerInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFormHandler = (e) => {
        e.preventDefault()
        this.props.addForm(this.state)
        this.setState({
            name: '',
            viewers: ''
        })
    }

    render() {
        const {name, viewers} = this.state
        return (
            <div className='movies-add-form'>
                <h3>kinolar qoshish</h3>
                <form className='add-form d-flex' onSubmit={this.addFormHandler}>
                    <input
                        type='text'
                        onChange={this.changeHandlerInput}
                        name={'name'}
                        value={name}
                        className='form-control'
                        placeholder='(Qanday kino)'/>
                    <input
                        type='number'
                        onChange={this.changeHandlerInput}
                        name={'viewers'}
                        className='form-control new-post-lable'
                        placeholder='necha marta korilgan?'
                        value={viewers}
                    />
                    <button type={'submit'} className={'btn btn-outline-dark'}>Qo'shish
                    </button>
                </form>
            </div>
        );
    }
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