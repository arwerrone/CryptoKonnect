import React from 'react'
import SplashHero from '../components/splash/SplashHero'
import SplashFeatured from '../components/splash/SplashFeatured'
import SplashSignup from '../components/splash/SplashSignup'

function SplashPage() {
  return (
    <>
    <div><SplashHero /></div>
    <div><SplashFeatured /></div>
    <div><SplashSignup /></div>
    </>
  )
}

export default SplashPage