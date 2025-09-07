import type { NextPage } from "next"
import { useState, useEffect } from "react"

const PageTestApi: NextPage = () => {
  const [message, setMessage] = useState('')
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(json => setMessage(json.message))
      .catch(err => console.error(err))
  }, [])
  return (
    <>
      <h1>apiクライアントテストページ</h1>
      <p>{ message }</p>
    </>
  )
}

export default PageTestApi