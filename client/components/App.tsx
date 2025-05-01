// import { useFruits } from '../hooks/useFruits.ts'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import 'animate.css'

import Header from './Header'
import Home from './Pages/Home'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
