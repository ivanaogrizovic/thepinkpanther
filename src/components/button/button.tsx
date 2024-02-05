import React from "react";
import './button.css'
import { Link } from "react-router-dom";

function Button({ text, buttonClass }: any) {

    return (
        <div className="button-wrapper">
            <div><Link to="/book-an-appointment"><h3 className={buttonClass}>{text}</h3></Link></div>
        </div>
    );

}

export default Button;