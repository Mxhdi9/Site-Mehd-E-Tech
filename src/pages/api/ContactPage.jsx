import React from 'react';
import ContactForm from './ContactForm';

function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-4">Contactez-nous</h1>
      <p className="text-center mb-8">Remplissez le formulaire ci-dessous pour nous contacter :</p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
