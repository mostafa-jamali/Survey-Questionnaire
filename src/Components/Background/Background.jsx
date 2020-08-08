import React from 'react';


function Background (props) {
    const backgroundStyle = {
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundImage: `url(${props.Background})`,
        zIndex: -1
    }
    
    return (
        <div style={backgroundStyle}>

        </div>
    );
}

export default Background;
