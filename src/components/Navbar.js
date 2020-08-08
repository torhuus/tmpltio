import React from 'react';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Logo from '../logo.svg';
import qs from 'qs';

const Navbar = () => {
  return (
    <div className='container min-vh-100 bg-white d-flex justify-content-center align-items-center'>
      <div className='row d-flex flex-column text-center'>
        <img src={Logo} alt='' style={{ width: '100px', margin: '0 auto' }} />
        <h1 className='display-3 font-weight-bold'>Welcome to tmplt.io</h1>
        <p className='lead'>Your one stop shop for 10/10 templates for business and personal use</p>
        <Formik
          initialValues={{
            'bot-field': '',
            'form-name': 'contact',
            email: '',
          }}>
          <form name='contact' method='post' data-netlify='true'>
            <div className='input-group input-group-lg mt-4'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email...'
                className='form-control'
              />
              <div className='input-group-prepend'>
                <input
                  type='submit'
                  value='Get notified'
                  className='btn btn-secondary btn-block input-group-text'
                />
              </div>
            </div>
            <Field type='hidden' name='bot-field' />
            <Field type='hidden' name='form-name' />
          </form>
        </Formik>
      </div>
    </div>
  );
};

export default Navbar;
