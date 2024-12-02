import React from "react";
//import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <h3>Log In</h3>
      <p>
        Log in to use your free Library account to borrow books from the nonprofit Internet Archive.
      </p>
      <button className="google-login-btn">
        Sign in with Google
      </button>
      <div className="divider">
        <span>OR</span>
      </div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />

        <div className="form-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="/forgot-password">Forgot your Password?</a>
        </div>

        <button type="submit" className="login-btn">Log In</button>
      </form>

      <p className="signup-link">
        Don’t have an account? <a href="/signup">Sign up now</a>.
      </p>
    </div>
  );
}

export default Login;
