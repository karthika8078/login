import React from "react";

function SignUp() {
  return (
    <div className="signup-container">
      <h3>Sign Up</h3>
      <p>
        Get your free Library account to borrow digital books from the nonprofit Internet Archive.
      </p>
      <button className="google-login-btn">Sign in with Google</button>
      <div className="divider">
        <span>OR</span>
      </div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="screenName"> Name</label>
        <input
          type="text"
          id="screenName"
          placeholder="Enter your  name"
          required
        />
       

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />

        

        <button type="submit" className="signup-btn">Sign Up with Email</button>
      </form>
      <p className="terms">
        By signing up, you agree to the Internet Archive's{" "}
        <a href="/terms">Terms of Service</a>.
      </p>
      <p className="login-link">
        Already have an account? <a href="/login">Log in</a>.
      </p>
    </div>
  );
}

export default SignUp;
