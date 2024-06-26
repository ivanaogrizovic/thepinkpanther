import { FaPhone } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";
import './contacts-hours.scss';

function ContactsHours() {

    return (
        <div className="fade-in contacts-hours">
            <div className="contacts-info">
                <div className="contacts-section">
                    <h3>Our contacts</h3>
                    <span className="text-wrapper"><FaPhone />
                        <p className="info-text">+353 083 000 111 2223</p>
                    </span>
                    <span className="text-wrapper"><GrMail />
                        <p className="info-text">info@thepinkpanther.com</p>
                    </span>
                </div>
                <div className="contacts-section">
                    <h3>Our working hours</h3>
                    <span className="text-wrapper">
                        <FaRegClock /><p className="info-text">09.00 - 18.00 Monday - Sunday</p>
                    </span>
                    <span className="text-wrapper">
                        <p className="info-text">Hours may change during bank holidays</p>
                    </span>
                </div>
            </div>
        </div>
    );

}

export default ContactsHours;
