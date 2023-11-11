import React from "react";
import './button.css'
import { Link } from "react-router-dom";

function Button(props: any) {

    const buttonText = props.text;
    const buttonClass = props.buttonClass;

    return (
        <div className="button-wrapper">
            <div><Link to="book"><h3 className={buttonClass}>{buttonText}</h3></Link></div>
        </div>
    );

}

export default Button;