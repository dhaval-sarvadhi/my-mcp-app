import { useState } from 'react'
import './App.css'

const API_ROOT = 'http://localhost:8081/';

function App() {
  const [serverStatus, setServerStatus] = useState(null);
  const [statusType, setStatusType] = useState(null); // 'success' or 'fail'
  const [loading, setLoading] = useState(false);

  const connectServer = async () => {
    setLoading(true);
    setServerStatus(null);
    setStatusType(null);
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
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' }}>
      <div style={{ marginBottom: '1rem', color: '#555' }}>
        <strong>API Root:</strong> {API_ROOT}
      </div>
      <button onClick={connectServer} style={{ fontSize: '1.2rem', padding: '0.5rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 160 }} disabled={loading}>
        {loading && (
          <span style={{
            display: 'inline-block',
            width: 18,
            height: 18,
            border: '3px solid #fff',
            borderTop: '3px solid #3498db',
            borderRadius: '50%',
            marginRight: 10,
            animation: 'spin 1s linear infinite',
          }} />
        )}
        {loading ? 'Connecting...' : 'Connect server'}
      </button>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      {loading && <p style={{ marginTop: '1rem' }}>Connecting to server...</p>}
      {serverStatus && !loading && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              width: 16,
              height: 16,
              borderRadius: '50%',
              marginRight: 10,
              backgroundColor: statusType === 'success' ? 'green' : 'red',
            }}
          ></span>
          <span style={{ fontWeight: 'bold', color: statusType === 'success' ? 'green' : 'red' }}>
            {statusType === 'success' ? 'Success' : 'Failed'}
          </span>
          <span style={{ marginLeft: 10 }}>{serverStatus}</span>
        </div>
      )}
    </div>
  )
}

export default App
