import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const API_ROOT = 'http://localhost:8081/';

function App() {
  const [serverStatus, setServerStatus] = useState(null);
  const [statusType, setStatusType] = useState(null); // 'success' or 'fail'
  const [loading, setLoading] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const connectServer = async () => {
    setLoading(true);
    setServerStatus(null);
    setStatusType(null);
    setShowStatus(false);
    try {
      const res = await fetch(API_ROOT);
      await new Promise(resolve => setTimeout(resolve, 1200)); // 1.2s delay
      if (res.ok) {
        setServerStatus('Connected to server!');
        setStatusType('success');
      } else {
        setServerStatus('Server responded with error');
        setStatusType('fail');
      }
    } catch {
      await new Promise(resolve => setTimeout(resolve, 1200)); // 1.2s delay
      setServerStatus('Could not connect to server');
      setStatusType('fail');
    } finally {
      setLoading(false);
      setTimeout(() => setShowStatus(true), 100); // animate in
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'var(--color-theme-bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: 'var(--color-theme-primary-dark)', textAlign: 'center' }}>
          Test Server Connection
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: 'var(--color-gray-400)', fontFamily: 'monospace', wordBreak: 'break-all', textAlign: 'center' }}>
          API: {API_ROOT}
        </Typography>
        <Button onClick={connectServer} variant="contained" color="primary" sx={{ bgcolor: 'var(--color-theme-primary)', color: 'var(--color-black)', fontWeight: 700, fontSize: 18, px: 4, py: 1.5, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }} disabled={loading}>
          {loading && <CircularProgress size={20} sx={{ color: 'var(--color-gray-600)', mr: 1 }} />}
          {loading ? 'Testing...' : 'Test Connection'}
        </Button>
        {showStatus && (
          <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <Box
              component="span"
              sx={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                display: 'inline-block',
                bgcolor: statusType === 'success' ? '#4caf50' : '#e53935',
                boxShadow: statusType === 'success' ? '0 0 6px #4caf50' : '0 0 6px #e53935',
                transition: 'background 0.2s',
              }}
            />
            <Typography variant="h6" sx={{ color: 'var(--color-theme-primary-light)', fontWeight: 600 }}>
              {serverStatus}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
