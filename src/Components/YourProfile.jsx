import React from 'react';
import PersonIcon from '../Data/person.svg'
import BackIcon from '../Data/back.svg';
import PhoneIcon from '../Data/phone.svg';
import EmailIcon from '../Data/email.svg';

const YourProfile = () => {
    const entryStyle={
        display:'grid', gridTemplateRows:'1', gridTemplateColumns:'1fr 4fr', justifyItems:'start', width:'75vw', border:'solid black 1px', borderRadius:'1rem', margin:'0.5rem', padding:'0.5rem 0.5rem', alignSelf:'center'
    }
    return ( 
        <>
                <div className="app-header" style={{justifyContent:'start'}}>
                <img src={BackIcon} style={{marginRight:'3rem'}} alt="Back"/>
                <span style={{fontSize:'18px'}}>My Profile</span>
                </div>
            <div style={{display:'flex', flexDirection:'column', margin:'auto'}}>
                <img src={PersonIcon} alt="Avatar"/>
                <div style={entryStyle}><span style={{columnSpan:'1, 4', overflow:'scroll', width:'50vw'}}>Deepak DEPAK DEEPAKADSFASDF Chandola</span></div>
                <div style={entryStyle}><img src={EmailIcon} alt="Email address"/><span style={{overflow:'scroll', width:'50vw'}}>thedeepakchandola@gmail.com</span></div>
                <div style={entryStyle}><img src={PhoneIcon} alt="Phone number"/><span>9634986016</span></div>
            </div>
        </>
     );
}
 
export default YourProfile;