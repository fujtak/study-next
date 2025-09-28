"use client"

import { useState } from 'react'
import postApi from '../../utils/postApi'

export default function PageLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const sumbit = async() => {
    await postApi('/api/auth/login', {
      username,
      password
    })
  }
  return (
    <>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} className='border' />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='border' />
      <button onClick={sumbit}>送信</button>
    </>
  )
}