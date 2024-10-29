import React, {useState} from "react";
import "./header.css";
import Stories from "./Stories";


function Header() {
    const stories = [
        {
            userName: 'Muhammed',
            avatar: 'img/amg.jpg',
            imgstories: ['img/granta.jpg']
        },
        {
            userName: 'Arsamak',
            avatar: 'img/audi.jpg',
            imgstories: ['img/granta.jpg']
        },
        {
            userName: 'Adam',
            avatar: 'img/granta.jpg',
            imgstories: ['img/granta.jpg']
        },
        {
            userName: 'Musa',
            avatar: 'img/bugatti.jpg',
            imgstories: ['img/granta.jpg']
        },
        {
            userName: 'Muhammed',
            avatar: 'img/amg.jpg',
            imgstories: ['img/granta.jpg']
        },
        {
            userName: 'Arsamak',
            avatar: 'img/audi.jpg',
            imgstories: ['img/granta.jpg']
        },
        {
            userName: 'Adam',
            avatar: 'img/granta.jpg',
            imgstories: ['img/granta.jpg']
        },
        {
            userName: 'Musa',
            avatar: 'img/bugatti.jpg',
            imgstories: ['img/granta.jpg']
        }
    ]

    

    const [openStories, setOpenStories] = useState(false);
    return (
        <header>
            {openStories && <div className="stories-block"><img src="img/granta.jpg" alt="" /></div>}
            <div class="head-block">
                <img class="instaLogo" src='img/Instagram_logo.svg' alt="" />
                <div class="icons">
                <img src='img/heartIcon.svg' alt="" style={{cursor: 'pointer'}}/>
                <img src='img/shareIcon.svg' alt="" style={{cursor: 'pointer'}}/>
                </div>
            </div>

            <div class="stories-contein">
                <div class="storiesBtn">
                    <div class="storiesImg-block">
                        <img class="storiesImg" src='img/bmw.jpg' alt="" />
                    </div>
                    <img class="addStory" src='img/addStory.svg' alt="" />
                    <span class="storiesName">Your story</span>
                </div>

                {
                    stories.map(str => (
                        <div class="storiesBtn" onClick={() => setOpenStories(true)}>
                            <div class="storiesImg-block">
                                <img class="storiesImg" src={str.avatar} alt="" />
                            </div>
                            <span class="storiesName">{str.userName}</span>
                        </div>
                    ))
                }
            </div>
        </header>
    )
}

export default Header;