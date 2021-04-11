import React from "react";
import { ListItem, ListItemIcon, ListItemText, List, makeStyles } from "@material-ui/core/";
import MailIcon from "@material-ui/icons/Mail";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}))

const MenuSettings = ({ onDrawerClose }) => {
    const classes = useStyles();


    return (
        <List>
            <Link to="/user" className={classes.link}>
                <ListItem button onClick={onDrawerClose}>
                    <ListItemIcon  >
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItem>
            </Link>


            <Link to="/register" className={classes.link}>
                <ListItem button onClick={onDrawerClose}>
                    <ListItemIcon>
                        <LockOpenIcon />
                    </ListItemIcon>
                    <ListItemText primary="Register" />
                </ListItem>
            </Link>

            <Link to="/login" className={classes.link}>
                <ListItem button onClick={onDrawerClose}>
                    <ListItemIcon>
                        <VpnKeyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                </ListItem>
            </Link>

        </List>
    );
}
export default MenuSettings
