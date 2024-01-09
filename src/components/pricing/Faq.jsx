import React, { useState } from 'react'
import Title from '../title/Title'
import { faq } from '../../dummydata'

const Faq = () => {
    const [click, setClick] = useState(false)
    const toogle = (index) => {
        if (click === index) {
            return setClick(false)

        }
        setClick(index)
    }
    return (
        <>
            <div className='title'>
                <Title subtitle='FAQS' title='Frequesntly Ask Questions' />
                <section className='faq'>
                    <div className='container'>
                        {faq.map((value, index) => (
                            <div className="box">
                                <button className='accordion' onClick={() => toogle(index)} key={index}>
                                    <h2>{value.title}</h2>
                                    <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                                </button>
                                {click === index ? (
                                    <div className='text'>
                                        <p>{value.desc}</p>
                                    </div>
                                ) : false}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Faq