import React, { useState } from "react";
import './contact-form.css';

function ContactForm() {

    const [contactReason, setContactReason] = useState([]);

    const handleChange = (e: any) => {
        setContactReason(e.target.value);
    }

    return (
        <div className="fade-in">
            <div className="assist-you">
                <h3>How can we assist you?</h3>
                <p className="assist-you__text">Our Diamond Experts can help you choose a diamond engagement ring or diamond jewellery. Building upon our legacy of showcasing the world's most beautiful gemstones, they can share the origin of select The Pink Panther diamonds and the details that make a The Pink Panther diamond shine above all others.</p>
            </div>
            <div className="form-container">
                <form>
                    <div className="form-field">
                        <label>
                            Name <input type="text" value={"text"} />
                        </label>
                    </div>
                    <div className="form-field">
                        <label>
                            Email <input type="text" value={"text"} />
                        </label>
                    </div>
                    <div className="form-field">
                        Service needed <select value={contactReason} onChange={handleChange}>
                            <option value="Ask a Diamond Expert">Ask a Diamond Expert</option>
                            <option value="Request a repair">Request a repair</option>
                            <option value="Find your fit">Find your fit</option>
                            <option value="Personalise it">Personalise it</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label>
                            Please share any additional details to help us best prepare for your appointment <input type="text" value={"text"} />
                        </label>
                    </div>
                    <input className="button button__primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ContactForm;