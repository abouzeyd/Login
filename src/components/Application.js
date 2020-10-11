import React from "react"
import { Router } from "@reach/router"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import ProfilePage from "./ProfilePage"
import PasswordReset from "./PasswordReset"

const Application = () => {
  const user = null
  return (
    <div>
      user ?
      <ProfilePage />:
      <Router>
        <SignUp path="SignUp" />
        <SignIn path="/" />
        <PasswordReset path="PasswordReset" />
      </Router>
    </div>
  )
}
export default Application
