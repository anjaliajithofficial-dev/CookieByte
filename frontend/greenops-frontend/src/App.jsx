import { useState } from 'react';

function App() {
  const [code, setCode] = useState('');
  const [task, setTask] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  // Your Live Render Backend URL
  const API_BASE_URL = "https://greenops-and-phantomgrid.onrender.com";

  const callAPI = async (endpoint, data) => {
    setResult("Analyzing...");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();

      // We set the 'result' state to the string returned by your FastAPI backend
      setResult(json.result);
    } catch (e) {
      setResult("Error connecting to backend. Check if your Render service is active.");
    }
    setLoading(false);
  };

  return (
    <div style={{
      fontFamily: 'sans-serif',
      padding: '40px',
      background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      <h1 style={{ color: '#1f2937', textShadow: '2px 2px 4px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        🌍 GreenOps & PhantomGrid
      </h1>

      {/* Code Analyzer Card */}
      <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', marginBottom: '20px', width: '100%', maxWidth: '500px' }}>
        <h3 style={{ marginTop: 0 }}>GreenOps AI: Code Analyzer</h3>
        <textarea
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical', boxSizing: 'border-box', marginBottom: '10px' }}
          rows="5"
          placeholder="Paste code here (e.g., Python loops)..."
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          onClick={() => callAPI('analyze-code', { code })}
          disabled={loading}
          style={{ backgroundColor: '#16a34a', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '100%', fontWeight: 'bold', transition: '0.3s opacity' }}
        >
          {loading ? "Processing..." : "Analyze Efficiency"}
        </button>
      </div>

      {/* Task Classifier Card */}
      <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px' }}>
        <h3 style={{ marginTop: 0 }}>PhantomGrid: Task Classifier</h3>
        <input
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box', marginBottom: '10px' }}
          placeholder="e.g., Fix login bug on production"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={() => callAPI('classify-task', { task })}
          disabled={loading}
          style={{ backgroundColor: '#2563eb', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}
        >
          {loading ? "Processing..." : "Classify Task"}
        </button>
      </div>

      {/* Result Display Card */}
      {result && (
        <div style={{ marginTop: '25px', padding: '25px', width: '100%', maxWidth: '500px', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', border: '1px solid #eee' }}>
          <h3 style={{ marginTop: 0, borderBottom: '2px solid #f3f4f6', paddingBottom: '10px' }}>Analysis Report</h3>
          {(() => {
            if (result === "Analyzing...") return <p>Working on it...</p>;
            if (result.includes("Error")) return <p style={{ color: '#dc2626' }}>{result}</p>;

            try {
              // Clean up markdown blocks if the AI accidentally included them
              let cleanResult = result.replace(/```json/g, '').replace(/```/g, '').trim();
              const json = JSON.parse(cleanResult);

              return (
                <div style={{ lineHeight: '1.6' }}>
                  {json.score !== undefined && (
                    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Green Score: </span>
                      <span style={{
                        fontSize: '2rem',
                        color: json.score > 70 ? '#16a34a' : json.score > 40 ? '#f59e0b' : '#dc2626',
                        fontWeight: '800'
                      }}>
                        {json.score}/100
                      </span>
                    </div>
                  )}
                  {json.issue && <p><strong>🚨 Issue:</strong> {json.issue}</p>}
                  {json.fix && (
                    <div style={{ background: '#f0fdf4', padding: '15px', borderRadius: '8px', borderLeft: '5px solid #16a34a', marginTop: '10px' }}>
                      <strong>✅ Recommended Fix:</strong><br /> {json.fix}
                    </div>
                  )}
                  {json.classification && (
                    <div style={{ marginTop: '10px' }}>
                      <p><strong>Priority:</strong>
                        <span style={{
                          marginLeft: '10px',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          backgroundColor: json.classification === 'URGENT' ? '#fee2e2' : '#dbeafe',
                          color: json.classification === 'URGENT' ? '#dc2626' : '#2563eb',
                          fontWeight: 'bold'
                        }}>
                          {json.classification}
                        </span>
                      </p>
                      <p><strong>💡 Reason:</strong> {json.reason}</p>
                    </div>
                  )}
                </div>
              );
            } catch (e) {
              return <p style={{ whiteSpace: 'pre-wrap', background: '#f9fafb', padding: '10px', borderRadius: '5px' }}><strong>Raw Output:</strong> {result}</p>;
            }
          })()}
        </div>
      )}
    </div>
  );
}

export default App;