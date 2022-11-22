import { useState } from 'react';
import Input from '../../Components/InputReuseable/Input';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setpasswordErr] = useState(false);

  const userNameHandler = (event) => {
    const inputVal = event.target.value;
    // if(inputVal.trim().length <= 3){
    //     setUsernameErr(true)
    // }
    // else
    // {
    //     setUsernameErr(false)
    // }
    setUsername(inputVal);
    setUsernameErr(inputVal.trim().length <= 3);
  };

  const passwordHandler = (event) => {
    const inputVal = event.target.value;
    setPassword(inputVal);
    setpasswordErr(inputVal.trim().length <= 5);
  };

  const loginFormHandler = (e) => {
    e.preventDefault();
    console.log('Form value', {username}, {password});
  }

  return (
    <div className="form-box">
      <form onSubmit={loginFormHandler}>
        <h2>Login Form</h2>
        <Input
          onChange={userNameHandler}
          className={`${usernameErr ? "error-field" : ""}`}
          field={{
            type: "text",
            name: "username",
            value: username,
            placeholder: "Username",
            autoComplete: "false",
          }}
        />
        <Input
          onChange={passwordHandler}
          className={`${passwordErr ? "error-field" : ""}`}
          field={{
            type: "password",
            name: "password",
            value: password,
            placeholder: "Password",
            autoComplete: "false",
          }}
        />
        <div className="submitBtn">
          <button
            type="submit"
            disabled={
              usernameErr ||
              passwordErr ||
              username.length === 0 ||
              password.length === 0
            }
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
