import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("welcomeMsg")}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t("addNotificationBtnText")}
        </button>
        <h3>
          {t("notificationMsg", { count })}
        </h3>
        <p>
          <Trans i18nKey="editMsg">
            Edit <code>src/App.jsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">
        <Trans i18nKey="detailsMsg">
          Click on the <b>Vite</b> and <b>React</b> logos to <i>learn more</i>
        </Trans>
      </p>
    </>
  )
}

export default App
