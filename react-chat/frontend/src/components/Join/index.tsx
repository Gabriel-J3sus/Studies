import { useState } from "react"
import { Link } from 'react-router-dom'

import './style.css'

export const Join: React.FC = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input type="text" placeholder="" className="joinInput" onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="" className="joinInput mt-20" onChange={e => setRoom(e.target.value)} />
        </div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  )
}