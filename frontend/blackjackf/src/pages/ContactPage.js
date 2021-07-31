import React from 'react';
import ContactCardAndy from '../components/ContactCard/ContactCardAndy'
import ContactCardWilson from '../components/ContactCard/ContactCardWilson'
import ContactCardJoshua from '../components/ContactCard/ContactCardJoshua'


const ContactPage = () => {
  return (
    <div>
      <h1 className="contact-heading">Contact</h1>
      <div className="contact-main-container">
        <div className="contact-card-container" >
          <ContactCardAndy />
          <ContactCardWilson />
          <ContactCardJoshua />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;