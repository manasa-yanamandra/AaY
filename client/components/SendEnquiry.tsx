import { useState } from 'react'
// import request from 'superagent'
function SendEnquiry() {
  const [details, setDetails] = useState({
    username: '',
    mobile: '',
    email: '',
  })
  
  const submitHandler = (e) => {
    e.preventDefault()
    const nameError = document.getElementById('nameError')
    const mobileError = document.getElementById('mobileError')
    const alphaExp = /^[a-za-z\s]+$/
    const numExp = /^[0-9]+$/
    const emailExp =
      /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,3}$/
    const { username, mobile, email } = details
    let nameStatus = false
    let mobileStatus = false
    let emailStatus = false

    //Name Validation
    if (username === '') {
      nameError.textContent = 'Name is Mandatory'
    } else {
      if (username.match(alphaExp)) {
        nameError.textContent = ''
        nameStatus = true
      } else {
        nameError.textContent = 'Name should contain only alphabets'
      }
    }

    //Mobile Validation
    if (mobile === '') {
      mobileError.textContent = 'Number is Mandatory'
    } else {
      if (mobile.match(numExp)) {
        mobileError.textContent = ''
        mobileStatus = true
      } else {
        mobileError.textContent = 'Mobile should contain only numbers'
      }
    }

    //Email Validation
    if (email === '') {
      emailError.textContent = 'Email is Mandatory'
    } else {
      if (email.match(emailExp)) {
        emailError.textContent = ''
        emailStatus = true
      } else {
        emailError.textContent = 'Email should contain email expression'
      }
    }

    // //Submitting into API
    // if (nameStatus && mobileStatus && emailStatus) {
    //   // API Call
    //   request
    //     .post(`http://localhost:3000/...`, details)
    //     .then(() => alert('Your Enquiry Sent'))
    //     .catch((error) => console.error(error))
    // }
  }
  
  const [text, setText] = useState('')
  const updateState = (e) => {
    // console.log(e.target.name, e.target.value)
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="username"
        onChange={updateState}
        placeholder="Enter Name"
        className="form-control mb-3"
      />
      <p id="nameError"></p>
      <input
        type="text"
        name="mobile"
        onChange={updateState}
        placeholder="Mobile Number"
        className="form-control mb-3"
      />
      <p id="mobileError"></p>
      <input
        type="text"
        name="email"
        onChange={updateState}
        placeholder="Email Address"
        className="form-control mb-3"
      />
      <p id="emailError"></p>
      <textarea
        value=""
        name="description"
        onChange={updateState}
        placeholder="Enter you message here...."
        className="form-control mb-3"
      />
      <input type="submit" className="form-control mb-3" />
    </form>
  )
}
export default SendEnquiry
