import React from 'react'
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
                        <button className='btn-danger rounded-lg py-2 w-[30%] bg-green-500'>Sign Up Now</button>
                </div>

            </div>
        </div>
    )
}

export default SplashSignup
