import React from 'react';
import BackIcon from '../Data/back.svg';


const Settings = () => {
    return ( 
        <>
        <div className="app-header" style={{justifyContent:'start'}}>
            <img src={BackIcon} style={{marginRight:'3rem'}} alt="Back"/>
            <span style={{fontSize:'18px'}}>Settings</span>
        </div>
        </>
     );
}
 
export default Settings;