import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';

export default function Home({ onLogin, isAuthenticated }) {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: 400 }}>
            <Card sx={{ width: '100%', maxWidth: 700, mx: 'auto', boxShadow: 6, borderRadius: 4, bgcolor: 'var(--color-purple-900)', color: 'var(--color-white)', mt: 6 }}>
                <CardContent sx={{ textAlign: 'center', p: { xs: 3, md: 6 } }}>
                    <Typography variant="h3" sx={{ color: 'var(--color-theme-primary)', fontWeight: 800, mb: 2, letterSpacing: 1 }}>
                        Welcome to My MCP App
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'var(--color-theme-primary-light)', mb: 4 }}>
                        This is the public home page. Please log in to access the dashboard.
                    </Typography>
                    {isAuthenticated ? (
                        <Button component={RouterLink} to="/dashboard" variant="contained" color="primary" sx={{ bgcolor: 'var(--color-theme-primary)', fontWeight: 700, fontSize: 18, px: 4, py: 1.5, borderRadius: 2, boxShadow: 2 }}>
                            Go to Dashboard
                        </Button>
                    ) : (
                        <Button onClick={onLogin} variant="contained" color="primary" sx={{ bgcolor: 'var(--color-theme-primary)', fontWeight: 700, fontSize: 18, px: 4, py: 1.5, borderRadius: 2, boxShadow: 2 }}>
                            Login
                        </Button>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
} 