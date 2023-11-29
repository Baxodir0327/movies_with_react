import './AppFilter.css'
import {Context} from "../../context";
import {useContext} from "react";

const AppFilter = () => {
    const {state, dispatch} = useContext(Context)
    const updateFilterHandler = (p) => {
        dispatch({type: "ON_FILTER", payload: p})
    }

    return (
        <div className='btn-group'>
            {btnArr.map(btn => (
                <button key={btn.name}
                        className={`btn ${state.filter === btn.name ? 'btn-dark' : 'btn btn-outline-dark'}`}
                        onClick={() => updateFilterHandler(btn.name)}
                        type='button'>{btn.lable}</button>))
            }
        </div>
    );
};

const btnArr = [
    {name: 'all', lable: 'Barcha kinolar'},
    {name: 'popular', lable: 'Mashhur kinolar'},
    {name: 'mostViewers', lable: 'Eng kop korilgan kinolar'}
]
export default AppFilter;