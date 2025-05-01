// import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginButton from './Nav/LoginButton'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {
  const { isAuthenticated, logout } = useAuth0()

  const handleSignOut = () => {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }
  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <strong>
              <span className="text-danger">A</span>a
              <span className="text-danger">Y</span>
            </strong>
          </Link>

          {isAuthenticated && (
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/memories">
                    Beautiful Memories
                  </Link>
                  <Link className="nav-link" to="/songs">
                    Our Songs
                  </Link>
                  <Link className="nav-link" to="/GuestList">
                    Guest List
                  </Link>
                  {/* Sign out as a Link */}
                  <Link className="nav-link" to="#" onClick={handleSignOut}>
                    Sign out
                  </Link>
                </div>
              </div>
            </>
          )}
          {!isAuthenticated && (
            <div className="d-flex align-items-end">
              <LoginButton /> {/* Keep the sign-in button */}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
