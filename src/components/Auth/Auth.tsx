import React, { ChangeEvent, useState } from 'react';
import { useGlobalContext } from '../../context';
import './Auth.scss';
const Auth = () => {
  const { registerUser, signInUser } = useGlobalContext();
  const [isReg, setIsReg] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }
  return (
    <div className="auth">
      <h3 className="auth__title">Wellcome to J-Sprout</h3>
      <form className="auth__form">
        <div>
          <label htmlFor="">Email</label>

          <input
            type="email"
            value={userData.email}
            onChange={changeHandler}
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="">Password</label>

          <input
            type="password"
            value={userData.password}
            name="password"
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <button
            className="auth__btn"
            onClick={(e) => {
              if (isReg) {
                registerUser(e, userData);
              } else {
                signInUser(e, userData);
              }
            }}
          >
            {isReg ? 'Create Account' : 'Login'}
          </button>
        </div>
        <button
          className="auth__btn-acc"
          type="button"
          onClick={() => setIsReg(!isReg)}
        >
          {isReg ? 'Have Account' : 'Dont Have An Account'}
        </button>
      </form>
    </div>
  );
};

export default Auth;
