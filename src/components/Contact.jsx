import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { MdEmail, MdPhone } from './Icons';
import './Contact.css'; /* HMR Trigger */

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Name must be 50 characters or less')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required')
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // IMPORTANT: Replace these with your actual EmailJS credentials!
      const serviceId = 'service_i1d66sd';
      const templateId = 'template_8bewx3w';
      const publicKey = 'qXhuvYTSjrgI-LUMA';

      // The keys here must match the {{variables}} in your EmailJS template
      const templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Message sent successfully!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#ffffff',
            color: '#000000'
          });
          resetForm();
        })
        .catch((err) => {
          console.error('FAILED...', err);
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Failed to send message.',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#ffffff',
            color: '#000000'
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <section id="contact" className="section contact-section-new">
      <div className="portfolio-container contact-container-new">

        {/* Left Column: Text & Info */}
        <div className="contact-left-col">
          <div className="contact-header-new">
            <span className="contact-label-new">CONTACT</span>
            <h2 className="contact-title-new">
              Let's <span className="contact-highlight-new">Connect</span>
            </h2>
            <p className="contact-desc-new">
              Have a project in mind or want to discuss an opportunity? I'd love to hear from you. Drop a message and I'll get back to you promptly.
            </p>
          </div>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <MdEmail />
              </div>
              <span className="contact-text">tejasvidhiman98@gmail.com</span>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">
                <MdPhone />
              </div>
              <span className="contact-text">+91 9027579223</span>
            </div>

            
          </div>

          <div className="contact-socials">
            <Link to="https://www.linkedin.com/in/tejasvidhiman1/" target="_blank" rel="noopener noreferrer" className="social-icon-box" aria-label="Visit my LinkedIn profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
            <Link to="https://github.com/function-tej" target="_blank" rel="noopener noreferrer" className="social-icon-box" aria-label="Visit my GitHub profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </Link>
          </div>
        </div>

        {/* Right Column: Enquiry Form */}
        <div className="contact-right-col">
          <div className="contact-form-card-new">
            <h3 className="form-title-new">Send a Message</h3>

            <form className="contact-form-new" onSubmit={formik.handleSubmit}>
              <div className="form-group-new">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  {...formik.getFieldProps('name')}
                />
                <label htmlFor="name">Full Name</label>
                {formik.touched.name && formik.errors.name ? (
                  <div className="form-error-new">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="form-group-new">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  {...formik.getFieldProps('email')}
                />
                <label htmlFor="email">Email</label>
                {formik.touched.email && formik.errors.email ? (
                  <div className="form-error-new">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="form-group-new">
                <textarea
                  id="message"
                  placeholder=" "
                  rows="5"
                  {...formik.getFieldProps('message')}
                ></textarea>
                <label htmlFor="message">Message</label>
                {formik.touched.message && formik.errors.message ? (
                  <div className="form-error-new">{formik.errors.message}</div>
                ) : null}
              </div>

              <button type="submit" className="contact-submit-btn-new" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
