import React from 'react'
import './SoallyFooter.scss'

function SoallyFooter({ startPage }) {
    return (
        <div className={`d-flex flex-column align-items-center soallyfooter ${startPage ? "soallyfooter-start" : "soallyfooter-ques"}`}>
            <div className='d-flex align-items-center ml-0 footer-intro'>
                <button className="mr-3">Soally</button>
                <p>قدرت گرفته از</p>
            </div>
            <p>پلتفرم طراحی فرم های CRM آنلاین</p>
        </div>
    )



}

export default SoallyFooter
