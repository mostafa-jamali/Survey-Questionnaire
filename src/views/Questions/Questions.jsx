import React from 'react'
import SoallyFooter from '../../Components/SoallyFooter/SoallyFooter';
import Logo from '../../Components/Logo/Logo';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Questions.scss';


function Questions({ initialData }) {
    const myId = uuidv4();
  
    return (
        <div className="d-flex flex-column justify-content-start">
            <div className="stepper"></div>
            <div className="question">
               
            </div>
            <div>
                <SoallyFooter />
                <Logo logoSrc={initialData.logo_url} />
            </div>
        </div>
    )
}

export default Questions
