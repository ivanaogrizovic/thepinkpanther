import React from "react";
import './contacts-hours.css';
import { FaPhone } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";
import { LuClock8 } from "react-icons/lu";

function ContactsHours() {

    return (
        <div className="fade-in contacts-hours">
            <div className="contacts-info">
                <div className="contacts-section">
                    <h3>Our contacts</h3>
                    <span className="contact-section__text-wrapper"><FaPhone />
                        <p className="contacts-section__text">+353 083 000 111 2223</p>
                    </span>
                    <span className="contact-section__text-wrapper"><GrMail />
                        <p className="contacts-section__text">info@thepinkpanther.com</p>
                    </span>
                </div>
                <div className="contacts-section">
                    <h3>Our working hours</h3>
                    <span className="contact-section__text-wrapper">
                        <FaRegClock /><p className="contacts-section__text">09.00 - 18.00 Monday - Sunday</p>
                    </span>
                    <span className="contact-section__text-wrapper">
                        <p className="contacts-section__text">Hours may change during bank holidays</p>
                    </span>
                </div>
            </div>
        </div>
    );

}

export default ContactsHours;