import React from 'react';
import { Col } from 'reactstrap';
import './Logo.scss';
function Logo({ logoSrc, startPage }) {
    return (
        <div >
            <img className={`${startPage ? "startLogo" : "quesLogo"}`} src={logoSrc} />

        </div>
    )
}

export default Logo
