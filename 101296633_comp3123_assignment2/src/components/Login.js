import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/', {
        password,
        email
      })

      if (response.data === "exist") {
        navigate('/home',{state:{id:email}})
      }else if(response.data==="doesn't exist"){
        alert("User does not exist/hasn't signed up")
      }

      console.log('Form submitted successfully', response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
        />

        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="your password"
        />

        <input type="submit" />
      </form>
      <br />
      <p>OR</p>
      <p>Not a member?</p>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Login;
