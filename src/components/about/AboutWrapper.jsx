import React from 'react'
import { aboutWrapper } from '../../dummydata'

const AboutWrapper = () => {
    return (
        <>
            <section className='aboutwrapper'>
                <div className='container grid'>
                    {aboutWrapper.map((value) => (
                        <div className='box flex'>
                            <div className='img'>
                                <img src={value.cover} alt="" />
                            </div>
                            <div className='text'>
                                <h1>{value.data}</h1>
                                <h3>{value.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default AboutWrapper