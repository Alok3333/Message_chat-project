import { useState } from 'react';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userNameHandler = (event) => {
        // console.log(event.target.value);
        setUsername(event.target.value)
    }

    const passwordNameHandler = (event) => {
        // console.log(event.target.value);
        setPassword(event.target.value)
    }
    
  return (
    <div className="form-box">
      <form>
        <h2>Login Form</h2>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={username}
            onChange={userNameHandler}
            placeholder="Username"
            autoComplete="false"
          />
        </div>
        <div className="form-group">
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
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
