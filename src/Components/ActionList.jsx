import React from 'react';

import { Link } from 'react-router-dom';
 
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Avatar from '@material-ui/core/Avatar';

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

// const data=[
//     {title:'Task 1', type:'note', desc:'This is description for task 1', content:'This is some random content for list item1 which is of type note and this is the complete text I have written down regarding it', lastModified:Date()},
//     {title:'List 1', type:'list', listType:'checklist', listItems:['item1', 'item2', 'item3', 'item4'], lastModified:Date()},
//     {title: 'List 2', type:'list', listType:'bulletList', listItems:[{itemName:'item1', order:0},{itemName:'item2', order:1}], lastModified:Date()},
//     {title: 'My Event 1', type:'event', eventDesc:'This is some details regarding event 1', eventDate:'This is the date of event', lastModified:Date()},
//     {title:'link list 1', type:'links', linksDesc:'Collection of links on git tutorial', links:['https://link1.com','https://link2.com'], lastModified:Date()},
//     {title:'Task 1', type:'note', desc:'This is description for task 1', content:'This is some random content for list item1 which is of type note and this is the complete text I have written down regarding it', lastModified:Date()},
//     {title:'List 1', type:'list', listType:'checklist', listItems:['item1', 'item2', 'item3', 'item4'], lastModified:Date()},
//     {title: 'List 2', type:'list', listType:'bulletList', listItems:[{itemName:'item1', order:0},{itemName:'item2', order:1}], lastModified:Date()},
//     {title: 'My Event 1', type:'event', eventDesc:'This is some details regarding event 1', eventDate:'This is the date of event', lastModified:Date()},
//     {title:'link list 1', type:'links', linksDesc:'Collection of links on git tutorial', links:['https://link1.com','https://link2.com'], lastModified:Date()},
//     {title:'Task 1', type:'note', desc:'This is description for task 1', content:'This is some random content for list item1 which is of type note and this is the complete text I have written down regarding it', lastModified:Date()},
//     {title:'List 1', type:'list', listType:'checklist', listItems:['item1', 'item2', 'item3', 'item4'], lastModified:Date()},
//     {title: 'List 2', type:'list', listType:'bulletList', listItems:[{itemName:'item1', order:0},{itemName:'item2', order:1}], lastModified:Date()},
//     {title: 'My Event 1', type:'event', eventDesc:'This is some details regarding event 1', eventDate:'This is the date of event', lastModified:Date()},
//     {title:'link list 1', type:'links', linksDesc:'Collection of links on git tutorial', links:['https://link1.com','https://link2.com'], lastModified:Date()},
//     {title:'Task 1', type:'note', desc:'This is description for task 1', content:'This is some random content for list item1 which is of type note and this is the complete text I have written down regarding it', lastModified:Date()},
//     {title:'List 1', type:'list', listType:'checklist', listItems:['item1', 'item2', 'item3', 'item4'], lastModified:Date()},
//     {title: 'List 2', type:'list', listType:'bulletList', listItems:[{itemName:'item1', order:0},{itemName:'item2', order:1}], lastModified:Date()},
//     {title: 'My Event 1', type:'event', eventDesc:'This is some details regarding event 1', eventDate:'This is the date of event', lastModified:Date()},
//     {title:'link list 1', type:'links', linksDesc:'Collection of links on git tutorial', links:['https://link1.com','https://link2.com'], lastModified:Date()},
// ]

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
            

            <SwipeableDrawer open={openMenu} onClose={setMenu}>
                {MenuOptions()}
            </SwipeableDrawer>

            {/* {More OPTIONS} */}
            <Menu open={openMore} onClose={setMore} anchorEl={anchorEl}>
                <MenuItem>Your Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Know More</MenuItem>
            </Menu>

            <Fab color="primary" aria-label="add" className={classes.fab} onClick={setDialog}>
                <AddIcon />
            </Fab>

            <Dialog open={openDialog} onClose={setDialog}>
                <DialogTitle>What is New Action</DialogTitle>
                <List>
                    <ListItem>
                        <ListItemIcon><NotesRoundedIcon/></ListItemIcon>
                        <Link to="/newnote"><ListItemText primary={"Note"} /></Link>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ListRoundedIcon/></ListItemIcon>
                        <Link to="/newlist"><ListItemText primary={"List"}/></Link>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><EventNoteRoundedIcon/></ListItemIcon>
                        <ListItemText primary={"Event"}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LinkRoundedIcon/></ListItemIcon>
                        <ListItemText primary={"Link"}/>
                    </ListItem>
                </List>
            </Dialog>


            </div>
        </>
    );


    
}
 
export default ActionList;
