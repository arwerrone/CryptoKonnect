import React from 'react'
import SplashHero from '../components/splash/SplashHero'
import SplashFeatured from '../components/splash/SplashFeatured'
import SplashSignup from '../components/splash/SplashSignup'

function SplashPage() {
  return (
    <>
    <div><SplashSignup /></div>
    <div><SplashFeatured /></div>
    <div><SplashHero /></div>
    </>
  )
}

export default SplashPage