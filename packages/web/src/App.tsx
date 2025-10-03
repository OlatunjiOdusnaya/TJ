import React, { useEffect, useState } from 'react'

// Vite provides import.meta.env automatically; no need to redeclare interfaces.

export default function App() {
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    const base = (import.meta.env.VITE_API_BASE as string) || 'http://localhost:3000'
    fetch(`${base}/health`)
      .then((r) => r.json())
      .then((j) => setStatus(j.status))
      .catch(() => setStatus('offline'))
  }, [])

  return (
    <div>
      <h1>TJ Web</h1>
      <p>Server status: {status ?? 'loading'}</p>
    </div>
  )
}
