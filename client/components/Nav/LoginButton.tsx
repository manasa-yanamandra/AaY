import { useAuth0 } from '@auth0/auth0-react'
import Button from '../UI/Button.tsx'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

function LoginButton() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  // const handleSignOut = () => {
  //   console.log('sign out')
  //   //   TODO: return the logout function
  //   logout({ logoutParams: { returnTo: window.location.origin } })
  // }

  const handleSignIn = () => {
    console.log('sign in')
    //   TODO: return the loginWithRedirect function
    loginWithRedirect()
  }
  if (isAuthenticated) {
    // We don't render anything here anymore, as sign out is in the Header
    return null
  }

  return <Button onClick={handleSignIn}>Sign in</Button>
  // return (
  //   <>
  //     <IfAuthenticated>
  //       <Button onClick={handleSignOut}>Sign out</Button>
  //       {user && (
  //         <p data-testid="logged in user">Signed in as: {user?.nickname}</p>
  //       )}
  //     </IfAuthenticated>
  //     <IfNotAuthenticated>
  //       <Button onClick={handleSignIn}>Sign in</Button>
  //     </IfNotAuthenticated>
  //   </>
  // )
}

export default LoginButton
