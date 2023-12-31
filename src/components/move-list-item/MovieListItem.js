import './MovieListItem.css'
import {useContext} from "react";
import {Context} from "../../context";
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
    const {name, viewers, favourite, like,id} = props
    const {state,dispatch}=useContext(Context)

    const onDelete=()=>{
        dispatch({type:"ON_DELETE",payload:id})
    }
    const onToggleProp=(e)=>{
        dispatch({type:"ON_TOGGLE_PROP",payload:{id:id,prop: e.currentTarget.getAttribute('data-toggle')}})
    }

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