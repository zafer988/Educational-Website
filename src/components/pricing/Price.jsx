import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import Head from '../common/header/Head'
import Header from '../common/header/Header'
import "./price.css"
import Faq from "./Faq"

const Pricing = () => {
    return (
        <>
            <Head />
            <Header />
            <Back title='Choose The Right Plan' />
            <section className='price padding'>
                <div className='container grid'>
                    <PriceCard />
                </div>
            </section>
            <Faq />
        </>
    )
}

export default Pricing