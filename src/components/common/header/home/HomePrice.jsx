import React from 'react'
import Title from '../../../title/Title'
import PriceCard from '../../../pricing/PriceCard'
import './homeprice.css'
const HomePrice = () => {
    return (
        <>
            <section className='homeprice padding'>
                <div className='title'>
                    <Title subtitle='our pricing' title='pricing & packages' />
                </div>
                <div className="price container grid">
                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default HomePrice