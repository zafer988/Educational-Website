import React from 'react'
import { useLocation } from 'react-router-dom'
const Back = ({ title }) => {
    const location = useLocation()
    return (
        <>
            <section className='back'>
                <h2>Home /{location.pathname.split('/')[1]}</h2>
                {/* Bu, bir HTML başlık <h2> elementidir. İçeriği dinamik olarak oluşturulmuştur.
                Home /{location.pathname.split('/')[1]} ifadesi, sayfanın URL yolu (path) içinden ikinci bölümü alır ve "Home /" metni ile birleştirir. Bu, bir başlık oluşturur */}
                <h1>{title}</h1>
            </section>
            <div className='margin'></div>
        </>
    )
}

export default Back