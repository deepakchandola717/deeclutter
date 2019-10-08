import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      color:'white',
      borderColor:'white',
    },
    button: {
        margin: theme.spacing(1),
        width:'80%',
        alignSelf:'center'
      },
  }));

const SignIn = () => {

    const classes = useStyles();

    return ( 
        <>
            <div style={{height:'100vh', backgroundColor:'#005d61', color:'white', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                <span style={{fontWeight:'600', fontSize:'25px', margin:'2rem'}}>deeClutter</span>
                <div style={{display:'flex', flexDirection:'column'}}>
                <TextField
                    required
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained" color="primary" className={classes.button}>
                    Sign In
                </Button>
                <span style={{color:'grey', textDecoration:'underline', cursor:'pointer'}}>Forgot Password?</span>
                </div>
                <span style={{color:'grey', textDecoration:'underline', cursor:'pointer'}}>Don't have an account? Sign Up.</span>

            </div>
        </>
     );
}
 
export default SignIn;