import mainBanner from '../Images/mainBanner.jpg'
function Home() {
  return (
    <section className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={mainBanner} alt="" className="w-75 banner" />
        </div>
        <div className="col-lg-6 p-5">
          <h1>AaY</h1>
          <p>
            Love is in the air... and so are we! Join us for an unforgettable
            celebration.
          </p>
          {/* <NavLink to="/about">
              <button className="btn btn-outline-primary me-3">Know More</button>
            </NavLink>
            <NavLink to="/contact">
              <button className="btn btn-success">Contact</button>
            </NavLink> */}
        </div>
      </div>
    </section>
  )
}

export default Home
