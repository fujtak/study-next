const express = require('express')

const PORT = 8000
const app = express()

const USER_ADMIN = {
  id: '1',
  username: 'admin',
  password: 'password',
}

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body
  const isAuthed = (username === USER_ADMIN.username) && (password === USER_ADMIN.password)
  if(!isAuthed) {
    res.status(401).json({ message: 'Username or password are incorrect' })
    return
  }
  res.status(200).end()
})

app.listen(PORT, console.log(`server started! http://localhost:${PORT}`))