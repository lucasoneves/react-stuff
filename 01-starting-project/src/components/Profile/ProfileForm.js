import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();
  const apiKey = "AIzaSyC3x_zSwcqstmtmmnrEkjUTaD1H4a4wuaw";
  const newPassword = useRef();
  const authCtx = useContext(AuthContext);
  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPassword.current.value;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/')
    }).catch((error) => {
      console.error('Error changing password', error)
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' min="7" ref={newPassword}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
