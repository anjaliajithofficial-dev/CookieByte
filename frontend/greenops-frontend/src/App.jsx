import { useState } from 'react';

function App() {
  const [code, setCode] = useState('');
  const [task, setTask] = useState('');
  const [result, setResult] = useState('');

  // 1. ADD YOUR URL HERE (The one you got from Cloud Run)
  const API_BASE_URL = "https://gdg-backend-xxxxxxxx-el.a.run.app";

  const callAPI = async (endpoint, data) => {
    setResult("Analyzing...");
    try {
      // 2. CHANGE THE FETCH URL TO USE API_BASE_URL
      const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      setResult(json.result);
    } catch (e) {
      setResult("Error connecting to backend.");
    }
  };

// ... rest of your return code remains the same