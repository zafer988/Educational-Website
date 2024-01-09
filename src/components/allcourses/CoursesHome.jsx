import React from 'react'
import Back from '../common/back/Back'
import Head from '../common/header/Head'
import Header from '../common/header/Header'
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'

const CoursesHome = () => {
    return (
        <>
            <Head />
            <Header />
            <Back title='Explore Courses' />
            <CoursesCard />
            <OnlineCourses />
        </>
    )
}

export default CoursesHome