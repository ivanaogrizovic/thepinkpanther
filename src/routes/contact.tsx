import React from 'react';
import ContactsHours from '../components/contacts-hours/contacts-hours';
import ContactForm from '../components/contact-form/contact-form';

function Contact() {

    return (
        <div className='contacts-wrapper -fade-in'>
            <div className='bottom-margin'></div>
            <ContactsHours />
            <ContactForm />
            <div className='bottom-margin'></div>
        </div>
    );
}

export default Contact;