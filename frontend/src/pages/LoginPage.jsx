import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <section>
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
