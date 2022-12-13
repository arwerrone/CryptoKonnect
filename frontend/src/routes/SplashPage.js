import React from 'react'
import SplashHero from '../components/splash/SplashHero'
import SplashFeatured from '../components/splash/SplashFeatured'
import SplashSignup from '../components/splash/SplashSignup'

function SplashPage() {
  return (
    <>
    <div><SplashFeatured /></div>
    <div><SplashSignup /></div>
    <div><SplashHero /></div>
    </>
  )
}

export default SplashPage