import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import App from '../App.js';
import { Link } from 'react-router-dom'

const MainLayout = () =>
  <div className='main-layout'>
    <header>
      <h1><Link to='/'>Level Up Voting</Link></h1>
      <LoginButtons />
      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  </div>

export default MainLayout;
