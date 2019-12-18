import React from 'react';

import { Link } from 'react-router-dom';
 
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import NotesRoundedIcon from '@material-ui/icons/NotesRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import MenuIcon from '../Data/menu.svg';
import MoreIcon from '../Data/more.svg';
import './actionlist.css'
import Display from './Display';


const useStyles = makeStyles(theme=>({
    list: {
      width: 250,
    },
    fab: {
        margin: theme.spacing(1),
        position:'absolute',
        bottom:'1rem',
        right:'1rem'
      },
  }));

const ActionList = () => {

    const classes = useStyles();

    //App Drawer Controls
    const [openMenu, setOpenMenu]=React.useState(false);

    //App More Options Controls
    const [openMore, setOpenMore]=React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    //App New Action Dialog Controls
    const [openDialog, setOpenDialog] = React.useState(false);

    //Control Drawer
    const setMenu=()=>{
        let currentMenuState=openMenu;
        setOpenMenu(!currentMenuState);
    }

    //Control More Options
    const setMore=(event)=>{
        let currentMoreState = openMore;
        setOpenMore(!currentMoreState)
        setAnchorEl(event.currentTarget)
    }

    //Control Dialog
    const setDialog=()=>{
        let currentDialogState = openDialog;
        setOpenDialog(!currentDialogState)
    }

    // Link Style
    const LinkStyle={
        textDecoration:'none',
        color:'black'
    }

    //Drawer Menu Contents

    const MenuOptions = () =>{
        return(
            <>
                <div 
                    role="presentation"
                    onClick={setMenu}
                    onKeyDown={setMenu}
                    className={classes.list}
                >   
                    <div style={{display:'flex', font:'25px', fontWeight:600, color:'#005d61', margin:'1rem'}}>
                        deeClutter
                    </div>
                    <Divider/>
                    {/* <div style={{display:'flex', font:'25px', fontWeight:600, color:'#005d61', margin:'1rem', alignItems:'center', justifyContent:'space-around'}}>
                        <Avatar style={{backgroundColor:'#005d61'}}>DC</Avatar>Deepak Chandola
                    </div>
                    <Divider/> */}
                    <List>
                        <ListItem button key={"View All"}>
                            <ListItemIcon><ViewListRoundedIcon/></ListItemIcon>
                            <ListItemText primary={'View All'}/>
                        </ListItem>

                        <ListItem button key={"Notes"}>
                            <ListItemIcon><NotesRoundedIcon/></ListItemIcon>
                            <ListItemText primary={"Notes"}/>
                        </ListItem>

                        <ListItem button key={"Lists"}>
                            <ListItemIcon><ListRoundedIcon/></ListItemIcon>
                            <ListItemText primary={"Lists"}/>
                        </ListItem>

                        <ListItem button key={"Events"}>
                            <ListItemIcon><EventNoteRoundedIcon/></ListItemIcon>
                            <ListItemText primary={"Events"}/>
                        </ListItem>

                        <ListItem button key={"Links"}>
                            <ListItemIcon><LinkRoundedIcon/></ListItemIcon>
                            <ListItemText primary={"Links"}/>
                        </ListItem>

                    </List>
                    <Divider/>
                    <List>
                        <ListItem button key={"Log Out"}>
                            <ListItemIcon><ExitToAppRoundedIcon/></ListItemIcon>
                            <ListItemText primary={"Log Out"}/>
                        </ListItem>
                    </List>


                </div>
            </>
        )
    }

    return ( 
        <>
            <div className="app-header">
                <img src={MenuIcon} alt="App Menu" onClick={setMenu}/>
                <span>my actions</span>
                <img src={MoreIcon} alt="More Options" onClick={setMore}/>
            </div>
            <div className="action-container">
            <Display/>

            <SwipeableDrawer open={openMenu} onClose={setMenu}>
                {MenuOptions()}
            </SwipeableDrawer>

            {/* {More OPTIONS} */}
            <Menu open={openMore} onClose={setMore} anchorEl={anchorEl}>
                <MenuItem><Link style={LinkStyle} to="/yourprofile">Your Profile</Link></MenuItem>
                <MenuItem><Link style={LinkStyle} to="/settings">Settings</Link></MenuItem>
                <MenuItem><Link style={LinkStyle} to="/knowmore">Know More</Link></MenuItem>
            </Menu>

            <Fab color="primary" aria-label="add" className={classes.fab} onClick={setDialog}>
                <AddIcon />
            </Fab>

            <Dialog open={openDialog} onClose={setDialog}>
                <DialogTitle>What is New Action</DialogTitle>
                <List>
                <Link style={LinkStyle} to="/newnote">
                    <ListItem>
                        <ListItemIcon><NotesRoundedIcon/></ListItemIcon>
                        <ListItemText primary={"Note"} />
                    </ListItem>
                </Link>
                    <Link style={LinkStyle} to="/newlist">
                    <ListItem>
                        <ListItemIcon><ListRoundedIcon/></ListItemIcon>
                        <ListItemText primary={"List"}/>
                    </ListItem>
                </Link>
                    <Link style={LinkStyle} to="/newevent">
                    <ListItem>
                        <ListItemIcon><EventNoteRoundedIcon/></ListItemIcon>
                        <ListItemText primary={"Event"}/>
                    </ListItem>
                    </Link>
                    <Link style={LinkStyle} to="/newlink">
                    <ListItem>
                        <ListItemIcon><LinkRoundedIcon/></ListItemIcon>
                        <ListItemText primary={"Link"}/>
                    </ListItem>
                    </Link>
                </List>
            </Dialog>


            </div>
        </>
    );


    
}
 
export default ActionList;
