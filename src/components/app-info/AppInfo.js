import './AppInfo.css'
import {useContext} from "react";
import {Context} from "../../context";

const AppInfo = () => {
    const {state}=useContext(Context)
    return (
        <div className='app-info'>
            <p className={'fs-3 text-uppercase'}>barcha kinolar soni {state.data.length}</p>
            <p className={'fs-4 text-uppercase'}>Kop ko'rilgan kinolar soni(500+) {state.data.filter(c=>c.favourite).length}</p>
        </div>
    );
};

export default AppInfo;