import React from "react";
import "./header.css";
import heart from '../../img/Heart.svg';
import share from '../../img/Share.svg';
import logo from '../../img/Instagram_logo.svg';
import bmw from '../../img/bmw.jpg';
import addStory from '../../img/AddStory.svg';
import amg from '../../img/amg.jpg';
import audi from '../../img/audi.jpg';
import granta from '../../img/granta.jpg';
import bugatti from '../../img/bugatti.jpg';

function Header() {
    const stories = [
        {
            userName: 'Muhammed',
            img: amg
        },
        {
            userName: 'Arsamak',
            img: audi
        },
        {
            userName: 'Adam',
            img: granta
        },
        {
            userName: 'Musa',
            img: bugatti
        },
        {
            userName: 'Muhammed',
            img: amg
        },
        {
            userName: 'Arsamak',
            img: audi
        },
        {
            userName: 'Adam',
            img: granta
        },
        {
            userName: 'Musa',
            img: bugatti
        }
    ]

    const styles = {
        cursor: 'pointer'
    }
    return (
        <header>
            <div class="headBl">
                <img class="instaLogo" src={logo} alt="" />
                <div class="icons">
                <img src={heart} alt="" style={styles}/>
                <img src={share} alt="" style={styles}/>
                </div>
            </div>

            <div class="stories">
                <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src={bmw} alt="" />
                    </div>
                    <img class="addStory" src={addStory} alt="" />
                    <span class="storisName1">Your story</span>
                </div>

                {
                    stories.map(str => (
                        <div class="storis">
                            <div class="stiorisImgBl">
                                <img class="storisImg" src={str.img} alt="" />
                            </div>
                            <span class="storisName2">{str.userName}</span>
                        </div>
                    ))
                }
                {/* <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src={amg} alt="" />
                    </div>
                    <span class="storisName2">Muhammad</span>
                </div>

                <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src={audi} alt="" />
                    </div>
                    <span class="storisName3">Arsamak</span>
                </div>

                <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src={granta} alt="" />
                    </div>
                    <span class="storisName4">Adam</span>
                </div>

                <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src={bugatti} alt="" />
                    </div>
                    <span class="storisName5">Musa</span>
                </div>

                <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src={amg} alt="" />
                    </div>
                    <span class="storisName2">Muhammad</span>
                </div>

                <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src={audi} alt="" />
                    </div>
                    <span class="storisName3">Arsamak</span>
                </div>

                <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src={granta} alt="" />
                    </div>
                    <span class="storisName4">Adam</span>
                </div>

                <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src={bugatti} alt="" />
                    </div>
                    <span class="storisName5">Musa</span>
                </div> */}
            </div>
        </header>
    )
}

export default Header;