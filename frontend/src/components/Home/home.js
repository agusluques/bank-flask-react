import React from 'react'
import './home.scss'

import Transaction from '../Transaction/transaction';
import About from '../About/about';

const Home = (props) => {
   return (
      <div className="home">
         <Transaction></Transaction>
         <About></About>
      </div>
   )
}

export default Home;
