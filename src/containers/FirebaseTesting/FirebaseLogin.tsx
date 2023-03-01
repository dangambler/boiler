import React, { useEffect } from 'react';

import { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const FirebaseLogin: React.FC = () => {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    console.log('Login data:', user);
  }, [user]);

  const login = async () => {
    console.log('Starting login..');

    if (loginRef.current === null || passwordRef.current === null) {
      console.error('Ref Error');
      return;
    }

    console.log('Credentials check complete..');

    signInWithEmailAndPassword(
      loginRef.current.value,
      passwordRef.current.value
    );
  };

  return (
    <>
      <h4>Firebase Login</h4>
      <input ref={loginRef} placeholder="login"></input>
      <input ref={passwordRef} placeholder="password"></input>
      <button onClick={login}>Log In</button>
      {loading && <p>Loading..</p>}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </>
  );
};

export default FirebaseLogin;
