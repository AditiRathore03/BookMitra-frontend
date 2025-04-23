import React from 'react'
import './WelcomeBox.css'

function WelcomeBox() {
    return (
        <div className='welcome-box'>
            <p className='welcome-title'>WELCOME TO Book Mitra</p>
            <p className='welcome-message'>A library management and book recommendation system<br/>
            <span className='welcome-submessage'>Expore the library</span></p>
        </div>
    )
}

export default WelcomeBox
