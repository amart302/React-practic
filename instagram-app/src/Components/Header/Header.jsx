import React from "react";
import "./header.css";


function Header() {
    const stories = [
        {
            userName: 'Muhammed',
            img: 'img/amg.jpg'
        },
        {
            userName: 'Arsamak',
            img: 'img/audi.jpg'
        },
        {
            userName: 'Adam',
            img: 'img/granta.jpg'
        },
        {
            userName: 'Musa',
            img: 'img/bugatti.jpg'
        },
        {
            userName: 'Muhammed',
            img: 'img/amg.jpg'
        },
        {
            userName: 'Arsamak',
            img: 'img/audi.jpg'
        },
        {
            userName: 'Adam',
            img: 'img/granta.jpg'
        },
        {
            userName: 'Musa',
            img: 'img/bugatti.jpg'
        }
    ]

    const styles = {
        cursor: 'pointer'
    }
    return (
        <header>
            <div class="head-block">
                <img class="instaLogo" src='img/Instagram_logo.svg' alt="" />
                <div class="icons">
                <img src='img/heartIcon.svg' alt="" style={styles}/>
                <img src='img/shareIcon.svg' alt="" style={styles}/>
                </div>
            </div>

            <div class="stories">
                <div class="storis">
                    <div class="stiorisImgBl">
                        <img class="storisImg" src='img/bmw.jpg' alt="" />
                    </div>
                    <img class="addStory" src='img/addStory.svg' alt="" />
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
            </div>
        </header>
    )
}

export default Header;