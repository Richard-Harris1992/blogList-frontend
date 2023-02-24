import { useState } from "react";
import PropTypes from 'prop-types'

const LoginForm = ({ formSubmit }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUserFormChange = (e) => {
    setUsername(e.target.value);
  }

  const onPasswordFormChange = (e) => {
    setPassword(e.target.value);
  }

  const sendForm = (e) => {
    e.preventDefault();
    formSubmit({ username, password });
    setUsername('');
    setPassword('');
  }

  return (
    <div>
      <h2>Log in to the application</h2>
      <form onSubmit={sendForm} >
        <label htmlFor="username" > Username </label>
        <input type="text" id="username" value={username} onChange={onUserFormChange} /> <br />

        <label htmlFor="password"> Password </label>
        <input type="password" id="password" value={password} onChange={onPasswordFormChange} /> <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
LoginForm.propTypes = {
  sendForm: PropTypes.func.isRequired,
  onUserFormChange: PropTypes.func.isRequired,
  onPasswordFormChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}
export default LoginForm;