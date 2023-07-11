import React from 'react'
import './styles/home.css'
import BOT from '../../src/assets/bot.svg'
import Msg from '../../src/assets/navMessage.svg'
import Logo from '../../src/assets/BeatzLogo.svg'
import HomeIcon from '../../src/assets/navHome.svg'
import Search from '../../src/assets/navSearch.svg'
import navLogo from '../../src/assets/navLogo.svg'
import navHeart from '../../src/assets/navHeart.svg'
import navProfile from '../../src/assets/navProfile.svg'

import Profile from '../components/profile'

function Home() {
    return (
        <div className='home'>
            <div className="header">
                <div className="bot">
                    <img src={BOT} alt="" />
                </div>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="message">
                    <img src={Msg} alt="" />
                </div>
            </div>

            <Profile></Profile>

            <div className="footer-nav">
                <div className="home-icon">
                    <img src={HomeIcon} alt="" />
                </div>
                <div className="search-icon">
                    <img src={Search} alt="" />
                </div>
                <div className="nav-logo">
                    <img src={navLogo} alt="" />
                </div>
                <div className="nav-heart">
                    <img src={navHeart} alt="" />
                </div>
                <div className="nav-profile">
                    <img src={navProfile} alt="" />
                </div>

            </div>
        </div>

    )
}

export default Home