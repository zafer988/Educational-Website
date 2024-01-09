import React from 'react'
import Title from '../title/Title'
import { online } from '../../dummydata'
const OnlineCourses = () => {
    return (
        <section className='online'>
            <div className='container'>
                <Title subtitle='COURSES' title='Browse Our Online Courses' />
                <div className="content grid3">
                    {online.map((value) => (
                        <div className='box'>
                            <div className='img'>
                                <img src={value.cover} alt="" />
                                <img src={value.hoverCover} alt="" className='show' />
                            </div>
                            <h1>{value.courseName}</h1>
                            <span>{value.course}</span>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default OnlineCourses