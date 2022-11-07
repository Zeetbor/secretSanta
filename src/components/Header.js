import React from 'react';
import './Header.css'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


function Header() {
    return (
        <header>
            <Grid2 container >
                <Grid2 item xs={12} sm={6} md={4}>
                    
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4}>
                    HEADER
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4}>
                    
                </Grid2>

            </Grid2>
            
        </header>
    );
}

export default Header;