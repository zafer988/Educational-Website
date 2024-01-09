import React from 'react'
import './about.css'
import Back from '../common/back/Back'
import Head from '../common/header/Head'
import Header from '../common/header/Header'
import AboutCard from './AboutCard'


const About = () => {
    return (
        <>
            <Head />
            <Header />
            <Back title='About Us' />
            <AboutCard />


        </>
    )
}

export default About