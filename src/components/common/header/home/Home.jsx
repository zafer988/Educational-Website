import React from 'react'
import Head from '../Head'
import Hero from '../hero/Hero'
import Header from '../Header'
import AboutCard from '../../../about/AboutCard'
import HomeAbout from './HomeAbout'
import Test from './testiomonal/Test'
import HomeBlog from './HomeBlog'
import HomePrice from './HomePrice'




const Home = () => {
    return (

        <>
            <Head />
            <Header />
            <Hero />
            <AboutCard />
            <HomeAbout />
            <Test />
            <HomeBlog />
            <HomePrice />
        </>
    )
}

export default Home