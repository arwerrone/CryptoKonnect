import React from 'react'
import { Link } from 'react-router-dom';
import './SplashSignup.css'

import Crypto from '../../assets/trade.png'

const SplashSignup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Sign Up a new account for Free</h2>
                    <p>Sign Up a new account for Free, and Upgrade to Premium for more features and no coin limits.</p>
                    {/* <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                    </div> */}
                        <Link className="btn-danger rounded-lg py-2 px-4 bg-green-500 text-center no-underline" to="/signup">
                        Sign Up Now
          </Link>
                </div>

            </div>
        </div>
    )
}

export default SplashSignup
