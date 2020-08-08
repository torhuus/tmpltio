import React from 'react';
import Logo from '../logo.svg';

const Navbar = () => {
  return (
    <div className='container min-vh-100 bg-white d-flex justify-content-center align-items-center'>
      <div className='row d-flex flex-column text-center'>
        <img src={Logo} alt='' style={{ width: '100px', margin: '0 auto' }} />
        <h1 className='display-3 font-weight-bold'>Welcome to tmplt.io</h1>
        <p className='lead'>Your one stop shop for 10/10 templates for business and personal use</p>
        <form name='tmplt-email-list' method='post' data-netlify='true'>
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
                className='btn btn-secondary input-group-text'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
