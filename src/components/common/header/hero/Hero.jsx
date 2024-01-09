import React from 'react'
import './hero.css'
import Title from '../../../title/Title'
const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illum totam veritatis,impedit sit
              omnis ducimus autem veniam quaerat perferendis aliquid exercitationem minima! A modi laboriosam id ratione cupiditate asperiores?
              <div className='button'>
                <button className='primary-btn'>
                  GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button className='primary-btn2'>
                  VİEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>

  )
}
export default Hero