import { useRef, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

import imglogo from "./images/logo.png";
import { signup, login, logout, useAuth } from "./firebase";
import { getAuth } from "firebase/auth";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    // try {
    await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
    // alert("Error!");
    // }

    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    if (getAuth) {
      history.push("/");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      <div>Currently logged in as: {currentUser?.email}</div>
      <div className="login">
        <Link to="/">
          <img className="login__logo" src={imglogo} />
        </Link>
        <div id="fields">
          <div className="login__container">
            <h1>Sign-in</h1>

            <div>
              <h5 className="email_css">E-mail</h5>
              <input ref={emailRef} placeholder="Email" />

              <h5 className="password_css">Password</h5>
              <input type="password" ref={passwordRef} placeholder="Password" />

              <button
                disabled={loading || currentUser}
                onClick={handleSignup}
                className="login__signInButton"
              >
                Sign In
              </button>
            </div>

            <p>
              By signing-in you agree to the JOSH STORE Conditions of Use &
              Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>

            <button
              disabled={loading || currentUser}
              onClick={handleLogin}
              className="login__registerButton"
            >
              Log In
            </button>

            <button
              disabled={loading || !currentUser}
              onClick={handleLogout}
              className="logout__Button"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
