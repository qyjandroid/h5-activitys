import { useState } from 'preact/hooks'
import preactLogo from '@/assets/preact.svg'
import './app.scss'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={preactLogo} className="logo preact" alt="Preact logo" />
      <h1>Vite + Preact</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="test">
        测试一下css
      </div>
      <div className="default-bg"></div>
    </>
  )
}
