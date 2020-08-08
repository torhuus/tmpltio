import React from 'react';
import { Field, Formik } from 'formik';
import Logo from '../logo.svg';
import '../App.css';

const Navbar = () => {
  return (
    <div className='container min-vh-100 bg-white d-flex justify-content-center align-items-center'>
      <div className='row d-flex flex-column text-center'>
        <div className=''>
          <img src={Logo} alt='' style={{ width: '150px' }} />
        </div>
        <div className='mt-3'>
          <h1 className='display-3 font-weight-bold text-responsive'>Welcome to tmplt.io</h1>
          <p className='lead'>
            Your one stop shop for 10/10 templates for business and personal use
          </p>
        </div>
        <div className='mt-4'>
          <Formik
            initialValues={{
              'bot-field': '',
              'form-name': 'contact',
              email: '',
            }}>
            <form name='contact' method='post' data-netlify='true'>
              <div className='input-group input-group-lg px-3'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email...'
                  className='form-control'
                />
              </div>
              <div className='input-group input-group-lg mt-3 px-3'>
                <button className='btn btn-primary btn-block form-control' type='submit'>
                  <i className='fas fa-bell'></i> Get Notified
                </button>
              </div>
              <Field type='hidden' name='bot-field' />
              <Field type='hidden' name='form-name' />
            </form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
