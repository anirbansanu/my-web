import React from 'react';

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "30vh", 
        width: "100%",
    };
    return(
        <footer className="bg-transparent text-light py-3" style={footerStyle}>
            <p className="text-center font-style"><b>Made By Anirban 2021</b></p>
        </footer>
    )
}