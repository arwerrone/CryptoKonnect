import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

import Navbar from '../../components/Navbar';
// styles
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className='container'>
    <Navbar />
    {/* <h2>Crypto Social</h2> */}
    <form onSubmit={handleSubmit} className="round-corner my-5">
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          required
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
      </label>
      <br />
      <label>
        <span>password:</span>
        <input 
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      <br />
      {!isPending && <button className="btn bg-primary">Log in</button>}
      {isPending && <button className="btn bg-primary" disabled>loading</button>}
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}
