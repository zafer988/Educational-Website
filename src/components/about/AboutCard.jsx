import React from "react";
import "./about.css";
import aboutImage from "../common/back/images/about.webp";
import Title from '../title/Title';
import { homeAbout } from '../../dummydata';
import AboutWrapper from './AboutWrapper';


const AboutCard = () => {
    return (
        <>
            <section className='aboutHome'>
                <div className='container flexSB'>
                    <div className='left-row'>
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className='right-row'>
                        <Title subtitle='LEARN ANYTING' title='Benefits About Online Learning Expertise' />
                        <div className='items'>
                            {homeAbout.map((value) => (
                                <div className='item flexSB'>
                                    <div className='img'>
                                        <img src={value.cover} alt="" />
                                    </div>
                                    <div className='text'>
                                        <h2>{value.title}</h2>
                                        <p>{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <AboutWrapper />
        </>
    );
};

export default AboutCard;
