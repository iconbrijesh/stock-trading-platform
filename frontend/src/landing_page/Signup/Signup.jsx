function Signup() {
  return (
    <>
      <div className="container ">
        <h1 class="mt-5">Open a free demat and trading account online</h1>
        <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
        <div className="row mt-5">
          <div className="col ">
            <img src="images/signup.png" alt="Signup button" className="img-fluid" />

          </div>

          <div class="col">
            <h3>Signup now</h3>
            <p>Or track your existing application</p>
            <div className="input-group mb-3">
              <span className="input-group-text"  >{'\uD83C\uDDEE\uD83C\uDDF3'}+91 </span>
              <input type="tel" class="form-control" placeholder="Enter your number" aria-label="phone" />
            </div>
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary .btn-lg" type="button">Get OTP</button>
             
            </div>
            <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
            <p className="fs-6">Looking to open NRI account? <a href="https://example.com">Click here</a></p>


          </div>

        </div>
      </div>

    </>
  )

}

export default Signup;