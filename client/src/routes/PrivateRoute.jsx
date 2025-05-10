import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, isAuthenticated }) {
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
} 