import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import i18next from 'i18next';

const flagIconStyles = {
    width: "35px",
    height: "30px",
};

const langBtnStyles = {
    display: "inline-block",
    margin: "0 10px"
};

function App() {
    const [count, setCount] = useState(0)
    const { t } = useTranslation();

    const langBtnClickHandler = (lang) => {
        i18next.changeLanguage(lang, (error, t) => {
            console.log("Something went wrong with changing the language");
        });
    };


    return (
        <>
            <div className="lng-container" style={{ marginBottom: "30px" }}>
                <div style={langBtnStyles}>
                    <button onClick={(e) => langBtnClickHandler("en")} >
                        English&nbsp;
                        <img src="./usa.png" alt="USA flag" style={flagIconStyles} />
                    </button>
                </div>
                <div style={langBtnStyles}>
                    <button onClick={(e) => langBtnClickHandler("fr")} >
                        French&nbsp;
                        <img src="./france.png" alt="France flag" style={flagIconStyles} />
                    </button>
                </div>
                <div style={langBtnStyles}>
                    <button onClick={(e) => langBtnClickHandler("bgn")} >
                        Bulgarian&nbsp;
                        <img src="./bulgaria.png" alt="Bulgarian flag" style={flagIconStyles} />
                    </button>
                </div>
            </div>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <p className="read-the-docs">
                <Trans i18nKey="detailsMsg">
                    Click on the <b>Vite</b> and <b>React</b> logos to <i>learn more</i>
                </Trans>
            </p>
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
        </>
    )
}

export default App
