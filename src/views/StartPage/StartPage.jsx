import React, {useState} from 'react'
import Logo from '../../Components/Logo/Logo';
import StartButton from '../../Components/StartButton/StartButton';
import SoallyFooter from '../../Components/SoallyFooter/SoallyFooter';
import './StartPage.scss'

function StartPage({ initialData }) {
    const [startPage, setStartPage] = useState(true)

    return (
        <div className="d-flex flex-column align-items-center start">
            <div className="d-flex flex-column align-items-center startPageTop">
                <h1>{initialData.intro}</h1>
                <Logo logoSrc={initialData.logo_url} startPage={startPage} />
                <StartButton setStartPage={setStartPage} />
            </div>
            <SoallyFooter startPage={startPage} />
        </div>
    )
}

export default StartPage
