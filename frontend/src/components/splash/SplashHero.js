import React from 'react'
import './SplashHero.css'
import Crypto from '../../assets/hero-img.png'

const SplashHero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Track your Cryptos 24/7 using your personal account</p>
                    <h1 className='text-left'>Contact Us For Inquiries Or Suggestions</h1>
                    <p>Track, Send and Receive hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn-danger rounded-lg py-2 w-[30%] bg-green-500'>Contact Us</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplashHero
