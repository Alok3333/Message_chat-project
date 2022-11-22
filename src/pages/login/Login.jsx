import { useState } from 'react';
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

  const passwordNameHandler = (event) => {
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
        <div className={`form-group ${usernameErr ? 'error-filed-form' : ''}`}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={userNameHandler}
            placeholder="Username"
            autoComplete="false"
          />
        </div>
        <div className={`form-group ${passwordErr ? 'error-filed-form' : ''}`}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={passwordNameHandler}
            placeholder="Password"
            autoComplete="false"
          />
        </div>
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
