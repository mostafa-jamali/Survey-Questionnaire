import React from 'react'
import './StartButton.scss';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function StartButton({ setStartPage,startPage }) {
    const myId = uuidv4();

    return (
        <div>
            <Link to={`/questions/${myId}`}>
                <button onClick={()=>setStartPage(false)} className='d-flex justify-content-center align-items-center startButton'>شروع</button>
            </Link>
        </div>
    )
}

export default StartButton
