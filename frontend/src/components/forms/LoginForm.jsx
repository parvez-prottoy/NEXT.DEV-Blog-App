import { Envelope, Lock } from "phosphor-react";
import { Button, InputIcon, Input, Label } from "keep-react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="my-6">
      <form className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
        <h2 className="text-xl font-bold">Login User</h2>
        <fieldset className="space-y-1">
          <Label htmlFor="name">Email</Label>
          <div className="relative">
            <Input placeholder="Enter email" className="ps-11" />
            <InputIcon>
              <Envelope size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              placeholder="Enter password"
              type="password"
              className="ps-11"
            />
            <InputIcon>
              <Lock size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <Button className="w-full" size="md" color="secondary" type="submit">
          Login
        </Button>
        <hr />
        <p className="text-center text-secondary">Or</p>
        <hr />
        <Button className="w-full" size="md" color="secondary" type="submit">
          Google
        </Button>
        <p className="text-sm text-secondary">
          Don't have an account?{" "}
          <Link className="text-primary" to="/register">
            Register
          </Link>
          {/* Already have an account? <Link to="/register">Register</Link> */}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
