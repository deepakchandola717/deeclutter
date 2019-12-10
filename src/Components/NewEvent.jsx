import 'date-fns';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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



const NewEvent = () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
      setSelectedDate(date);
    };

    return ( 
        <>
        <div className="app-header" style={{justifyContent:'start'}}>
        <img src={BackIcon} style={{marginRight:'3rem'}} alt="Back"/>
        <span style={{fontSize:'18px'}}>Create an Event</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', margin:'1rem', alignItems:'center'}}>
            <TextField
                style={{width:'85%', margin:'1rem'}}
                placeholder="Event Title"
                label="Event Title"
                variant="outlined"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Event Date"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Event Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
            <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows="4"
            // rowsMax="5"
            defaultValue="my event"
            variant="outlined"
            style={{ margin:'1rem', width:'80%' }}
        />
            <BootstrapButton  variant="contained" color="primary" disableRipple >Save</BootstrapButton>
            </MuiPickersUtilsProvider>
        </div>
        </>
     );
}
 
export default NewEvent;