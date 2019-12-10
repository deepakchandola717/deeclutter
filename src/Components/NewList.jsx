import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import BackIcon from '../Data/back.svg';
import CloseIcon from '../Data/close.svg';

const AddButton = withStyles({
    root:{
      border: '1px solid grey',
      fontSize:20,
      width:'30%'
    }
})(Button)


const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);


const NewList = () => {
    return ( 
        <>
        <div className="app-header" style={{justifyContent:'start'}}>
        <img src={BackIcon} style={{marginRight:'3rem'}} alt="Back"/>
        <span style={{fontSize:'18px'}}>Create a List</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', margin:'1rem', alignItems:'center'}}>
            <TextField
                style={{width:'85%', margin:'1rem'}}
                placeholder="Title"
                // variant="outlined"
            />
            <div style={{display:'flex', width:'90%', margin:'1rem', justifyContent:'center'}}>
            <TextField
                
                placeholder="Item"
                variant="outlined"
            />
            <img src={CloseIcon} alt="delete"/>
            </div>
            
            <AddButton>+</AddButton>
            <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows="4"
            // rowsMax="5"
            defaultValue="my list"
            variant="outlined"
            style={{ margin:'1rem', width:'80%' }}
        />
        <BootstrapButton  variant="contained" color="primary" disableRipple >Save</BootstrapButton>
        </div>
        </>
     );
}
 
export default NewList;