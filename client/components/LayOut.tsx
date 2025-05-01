import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// import 'App.css'
import 'animate.css'
// import Dashboard from './Dashboard'
// import AdminLogin from './AdminLogin'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
// import Contact from './Contact'

function LayOut() {
  return (
    <>
      <div className="app">
        {/* <h1>Fullstack Boilerplate - with Memories!</h1> */}
        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
export default LayOut
