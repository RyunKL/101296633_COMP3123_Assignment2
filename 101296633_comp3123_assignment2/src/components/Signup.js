import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        username,
        password,
        email,
        country,
        gender
      });
      if(response.data==="exist") {
        alert("User already exists");
      }
      else if(response.data==="doesn't exist") {
        navigate("/home",{state:{id:email}});
      }
      console.log('Form submitted successfully', response.data);

    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="your username"
        />

        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="your password"
        />

        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
        />

        <input
          name="country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="your country"
        />

        <label>
          <input
            name="gender"
            type="radio"
            value="Male"
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
          />{' '}
          Male
        </label>

        <label>
          <input
            name="gender"
            type="radio"
            value="Female"
            checked={gender === 'Female'}
            onChange={() => setGender('Female')}
          />{' '}
          Female
        </label>

        <input type="submit" />
      </form>
      <br />
      <p>Already have an account?</p>
      <br />
      <Link to="/">Login</Link>
    </div>
  );
};

export default Signup;
