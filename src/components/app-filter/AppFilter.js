import './AppFilter.css'

const AppFilter = ({filter, updateFilterHandler}) => {
    return (
        <div className='btn-group'>
            {btnArr.map(btn => (
                <button key={btn.name} className={`${filter === btn.name ? 'btn btn-dark' : 'btn btn-outline-dark'}`}
                        onClick={() => updateFilterHandler(btn.name)} type='button'>{btn.lable}</button>))
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