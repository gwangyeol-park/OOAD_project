import React from 'react'
import { Link } from 'react-router-dom'
import '../asset/css/Header.css'

const Header = () => {
  return (
    <div className='nav'>
        <Link to="/">
            <span className='title'>title</span>
        </Link>
        <Link to="/create">
            <span className='create'>글 쓰기</span>
        </Link>
        <Link to="/signup">
            <span className='signup'>회원가입</span>
        </Link>
    </div>
  )
}

export default Header