import React from 'react';
import { useTranslation } from 'react-i18next';
import { CounterDisplay, CounterMutator } from './containers/ReduxTesting';

import './i18n/config';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <p>Boileplate Repository</p>
      <p>i18n test: {t('PLACEHOLDER')}</p>
      <p>Redux test:</p>
      <CounterDisplay />
      <CounterMutator />
    </div>
  );
}

export default App;
