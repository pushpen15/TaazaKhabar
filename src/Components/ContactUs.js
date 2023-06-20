import React from 'react';

const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    const conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <section className="container backgroundimage">
      <h2 className="text-center mb-10 size" style={{ margin: '65px 65px 65px', marginTop: '65px', color:"#116D6E" }}>Contact Us For News Heading </h2>
      <form onSubmit={onSubmit} className="contact-form" >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="submit-btn" type="submit">
          {formStatus === 'Send' ? 'Submit' : 'Submitting...'}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
