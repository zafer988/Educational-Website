import React from "react"
import Head from '../common/header/Head'
import Header from '../common/header/Header'
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"

const Team = () => {
    return (
        <>
            <Head />
            <Header />
            <Back title='Team' />
            <section className='team padding'>
                <div className='container grid'>
                    <TeamCard />
                </div>
            </section>

        </>
    )
}

export default Team