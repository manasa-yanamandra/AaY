// import React from 'react'
import LoginButton from './LoginButton'
import './App.css' // Or use inline styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/memories">Memories</a>
        <a href="/songs">Songs</a>
        <a href="/guestlist">GuestList</a>
        <a href="/contact">Contact</a>
        {/* Other navigation links */}
      </div>
      <LoginButton />
    </nav>
  )
}

export default Navbar
