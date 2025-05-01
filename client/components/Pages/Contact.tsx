import SendEnquiry from '../SendEnquiry'

function Contact() {
  return (
    <div className="container text-center p-5">
      <div className="row">
        <div className="col-lg-6 p-5">
          <div className="shadow p-5 h-100">
            <SendEnquiry />
          </div>
        </div>
        <div className="col-lg-6 p-5">
          <div className="shadow p-5 h-100">
            <p>
              <i className="bi bi-telephone-forward"></i> +64 999999999
            </p>
            <p>
              <i className="bi bi-envelope"></i> manasa@gmail.com
            </p>
            <p>
              <i className="bi bi-geo"></i> Auckland, NZ
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
