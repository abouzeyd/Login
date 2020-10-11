import React, { useState } from "react"
import { Link } from "@reach/router"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault()
  }
  const onChangeHandle = event => {
    const { name, value } = event.currentTarget
    if (name === "userEmail") {
      setEmail(value)
    } else if (name === "userPassword") {
      setPassword(value)
    }
  }
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        {error !== null && <div style={{ color: "red" }}>{error} </div>}
      </div>
      <form>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          name="userEmail"
          value={email}
          placeholder="test@gmail.com"
          id="userEmail"
          onChange={event => {
            onChangeHandle(event)
          }}
        />
        <button
          onClick={event => {
            signInWithEmailAndPasswordHandler(event, email, password)
          }}
        >
          Sign In
        </button>
        <p>or</p>
        <button> Sign in with Google</button>
        <p>
          D'ont have an account ?<Link to="SignUp">Sign Up here</Link>
          <br />
          <Link to="PasswordReset"> Forgot Password</Link>
        </p>
      </form>
    </div>
  )
}
export default SignIn
