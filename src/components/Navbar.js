import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/const'

export default function Navbar() {
    const user = false

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                style={{ background: 'linear-gradient(-45deg, #39249a, #e14e42)' }}
            >
                <Toolbar variant='dense'>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Asilbek Karomatov
                    </Typography>

                    {user ? (
                        <Button
                            style={{
                                color: 'black',
                                border: '1px solid #222',
                                borderRadius: '5px',
                                fontWeight: '700',
                            }}
                        >
                            Quit
                        </Button>
                    ) : (
                        <div
                            style={{
                                color: 'black',
                                justifyContent: 'flex-end',
                                border: '1px solid #222',
                                borderRadius: '5px',
                            }}
                        >
                            <NavLink to={LOGIN_ROUTE}>
                                <Button style={{ color: '#222', fontWeight: '700' }}>Login</Button>
                            </NavLink>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
