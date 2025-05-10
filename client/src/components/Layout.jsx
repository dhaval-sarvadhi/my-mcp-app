import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';

export default function Layout({ children, isAuthenticated, onLogin, onLogout }) {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'var(--color-theme-bg)', display: 'flex', flexDirection: 'column' }}>
            <AppBar position="static" sx={{ bgcolor: 'var(--color-theme-primary-dark)' }} elevation={2}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component={RouterLink} to="/" sx={{ color: 'var(--color-white)', textDecoration: 'none', fontWeight: 700, letterSpacing: 1 }}>
                        My MCP App
                    </Typography>
                    <Box>
                        <Button component={RouterLink} to="/" sx={{ color: 'var(--color-white)', mr: 1 }}>
                            Home
                        </Button>
                        <Button component={RouterLink} to="/dashboard" sx={{ color: 'var(--color-white)', mr: 1 }}>
                            Dashboard
                        </Button>
                        {isAuthenticated ? (
                            <Button onClick={onLogout} sx={{ color: 'var(--color-white)', fontWeight: 600 }}>
                                Logout
                            </Button>
                        ) : (
                            <Button onClick={onLogin} sx={{ color: 'var(--color-white)', fontWeight: 600 }}>
                                Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{ flex: 1, width: '100%', px: { xs: 2, md: 8 }, py: 4, display: 'flex', flexDirection: 'column', alignItems: 'stretch', bgcolor: 'var(--color-theme-bg)' }}>
                {children}
            </Box>
            <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'var(--color-theme-primary-dark)', color: 'var(--color-white)', fontSize: 14, letterSpacing: 1 }}>
                © {new Date().getFullYear()} My MCP App
            </Box>
        </Box>
    );
} 