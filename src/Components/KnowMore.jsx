import React from 'react';

import BackIcon from '../Data/back.svg';

const KnowMore = () => {
    return ( 
        <>
        <div className="app-header" style={{justifyContent:'start'}}>
        <img src={BackIcon} style={{marginRight:'3rem'}} alt="Back"/>
        <span style={{fontSize:'18px'}}>Know More</span>
        </div>
        <div>
            <span>
            <br/><b>
            deeClutter<br/></b>
            deeClutter your life ;)<br/>
            <br/><b><hr/>
            Add A Quick Note<br/></b>
            Something came up? quickly add it as a note.<br/>
            <br/><b>
            Create A List of Items<br/></b>
            A lot of points to take care of? Don't you worry, you can make a beautiful list<br/>
            <br/><b>
            Save that Date!!!<br/></b>
            Some days are worth remembering. Save those Dates in your personalised calendar.<br/>
            <br/><b>
            Revisit it later<br/></b>
            In the middle of something interesting but something else came up? Dump that link to your Clutter-Free-Life-Manager and complete it later.<br/>
            <br/>
            <br/>
            <br/><b><hr/>
            YOU ARE A SORTED HUMAN BEING!!</b>
            </span>
        </div>
        </>
     );
}
 
export default KnowMore;