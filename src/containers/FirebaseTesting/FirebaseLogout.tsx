import React from 'react';
import { auth } from '../../firebase';

const FirebaseLogout: React.FC = () => {
  return (
    <>
      <h4>{auth.currentUser?.displayName}</h4>
      <button onClick={() => auth.signOut()}>Log out</button>
    </>
  );
};

export default FirebaseLogout;
