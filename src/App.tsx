import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FirebaseLogin, FirebaseLogout } from './containers/FirebaseTesting';
import { CounterDisplay, CounterMutator } from './containers/ReduxTesting';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import './i18n/config';

function App() {
  const { t } = useTranslation();

  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log('User:', user);
  }, [user]);

  return (
    <div className="App">
      <h1>Boileplate Repository</h1>
      <p>i18n test: {t('PLACEHOLDER')}</p>
      <h2>Redux Test:</h2>
      <CounterDisplay />
      <CounterMutator />
      <h2>Firebase Test:</h2>
      {user ? <FirebaseLogout /> : <FirebaseLogin />}
    </div>
  );
}

export default App;
