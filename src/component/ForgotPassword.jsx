import React from "react";

function ForgotPassword() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Forgot Password</h2>
      <p>Enter your email to reset your password:</p>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            marginBottom: "20px",
          }}
          required
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;

