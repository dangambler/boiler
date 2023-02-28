import React from 'react';
import { useTranslation } from 'react-i18next';

import './i18n/config';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <p>Boileplate Repository</p>
      <p>i18n test: {t('PLACEHOLDER')}</p>
    </div>
  );
}

export default App;
