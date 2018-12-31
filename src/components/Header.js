import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link to={'/'} className="not-underline white">
                    <Typography variant="title" color="inherit">
                        Juegos de Mesa
                    </Typography>
                </Link>
            </Toolbar>
            
        </AppBar>
    )
}

export default Header;