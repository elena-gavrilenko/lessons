import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/user/userSelectors';
import { userLogOut } from '../../redux/user/userActions';

export const TodosAppBar = () => {

    const userName = useSelector(getUserName)

    const dispatch = useDispatch()

    const signOut = () => {
        console.log('log out')
        dispatch(userLogOut())
    }

    return (
        <Box sx={{ flexGrow: 1, marginBottom: '30px' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {userName}
                    </Typography>
                    <Button color="inherit" onClick={signOut}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}