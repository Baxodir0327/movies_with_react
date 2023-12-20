import './AppInfo.css'

const AppInfo = ({all,favourite}) => {
    return (
        <div className='app-info'>
            <p className={'fs-3 text-uppercase'}>barcha kinolar soni {all}</p>
            <p className={'fs-4 text-uppercase'}>Kop ko'rilgan kinolar soni {favourite}</p>
        </div>
    );
};

export default AppInfo;