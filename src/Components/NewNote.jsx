import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import BackIcon from '../Data/back.svg';

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

const NewNote = () => {
    return ( 
        <>
        <div className="app-header" style={{justifyContent:'start'}}>
        <img src={BackIcon} style={{marginRight:'3rem'}} alt="Back"/>
        <span style={{fontSize:'18px'}}>Add Note</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', margin:'1rem', alignItems:'center'}}>
            {/* <span style={{fontSize:'2rem'}}>Title</span> */}
            <TextField
                style={{width:'70%', margin:'1rem'}}
                placeholder="Title"
            />
            <TextField
                id="standard-multiline-static"
                label="Note"
                multiline
                rows="12"
                // defaultValue="Your note"
                variant="outlined"
                style={{margin:'1rem', width:'70%'}}
            />
            <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows="4"
            // rowsMax="5"
            defaultValue="my note"
            variant="outlined"
            style={{ margin:'1rem', width:'80%' }}
        />
        </div>
        <BootstrapButton variant="contained" color="primary" disableRipple>
              Save
      </BootstrapButton>
        </>
     );
}
 
export default NewNote;