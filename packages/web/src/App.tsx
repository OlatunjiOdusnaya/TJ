import React, { useEffect, useState } from 'react'

export default function App() {
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    fetch('/health')
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
