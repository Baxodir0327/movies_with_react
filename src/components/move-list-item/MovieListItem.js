import './MovieListItem.css'
// import {Component} from "react";

// class MovieListItem extends Component {
//     constructor(props) {
//         super(props);
//
//     }
//     render() {
//         const {name, viewers,onDelete,onToggleProp,favourite,like} = this.props
//         return (
//             <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
//                 <span onClick={onToggleProp} className='list-group-item-label' data-toggle={'like'}>{name}</span>
//
//                 <input
//                     type="number"
//                     className='list-group-item-input'
//                     defaultValue={viewers}/>
//
//                 <div className='d-flex jsutify-content-center align-items-center'>
//                     <button type='button' className='btn-cookie btn-sm'>
//                         <i className='fas fa-cookie' onClick={onToggleProp} data-toggle={'favourite'}></i>
//                     </button>
//                     <button type='button' className='btn-trash btn-sm'>
//                         <i onClick={onDelete} className='fas fa-trash'></i>
//                     </button>
//                     <i className='fas fa-star'></i>
//                 </div>
//             </li>
//         )
//     }
//
// }

const MovieListItem = (props) => {
    const {name, viewers, onDelete, onToggleProp, favourite, like} = props
    return (
        <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
            <span onClick={onToggleProp} className='list-group-item-label' data-toggle={'like'}>{name}</span>

            <input
                type="number"
                className='list-group-item-input'
                defaultValue={viewers}/>

            <div className='d-flex jsutify-content-center align-items-center'>
                <button type='button' className='btn-cookie btn-sm'>
                    <i className='fas fa-cookie' onClick={onToggleProp} data-toggle={'favourite'}></i>
                </button>
                <button type='button' className='btn-trash btn-sm'>
                    <i onClick={onDelete} className='fas fa-trash'></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
        </li>
    )
}

export default MovieListItem;