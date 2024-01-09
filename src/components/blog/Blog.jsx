import React from 'react'
import './blog.css'
import BlogCard from './BlogCard'
import Head from '../common/header/Head'
import Header from '../common/header/Header'
import Back from '../common/back/Back'
const Blog = () => {
    return (
        <>
            <Head />
            <Header />
            <Back title='Blog Posts' />
            <section className='blog padding'>
                <div className="container grid2" >
                    <BlogCard />
                </div>
            </section>

        </>
    )
}

export default Blog