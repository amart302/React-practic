import React, { useState } from "react";
import "./header.css";

function Header(props) {
    const [openStories, setOpenStories] = useState(false);
    const postData = props.postsData ? props.postsData.slice(1) : [];
    const [id, setId] = useState(0);

    // Функция для поиска выбранной истории
    const selectedStories = () => {
        
        return postData.find(data => data.id === id);
    };

    // Получаем выбранную историю один раз
    const selectedStory = selectedStories();

    return (
        <header>
            {openStories && (
                <div className="stories-block-parent">
                    <div className="stories-block">
                        <img src={selectedStory ? selectedStory.stories : ''} alt="" />
                    </div>
                </div>
            )}
            <div className="head-block">
                <img className="instaLogo" src='img/Instagram_logo.svg' alt="" />
                <div className="icons">
                    <img src='img/heartIcon.svg' alt="" style={{ cursor: 'pointer' }} />
                    <img src='img/shareIcon.svg' alt="" style={{ cursor: 'pointer' }} />
                </div>
            </div>

            <div className="stories-contein">
                <div className="storiesBtn">
                    <div className="storiesImg-block">
                        <img className="storiesImg" src='img/bmw.jpg' alt="" />
                    </div>
                    <img className="addStory" src='img/addStory.svg' alt="" />
                    <span className="storiesName">Your story</span>
                </div>

                {postData.map(data => (
                    <div
                        className="storiesBtn"
                        onClick={() => {
                            setOpenStories(true);
                            setId(data.id);
                            console.log(id);
                        }}
                        key={data.id}
                    >
                        <div className="storiesImg-block">
                            <img className="storiesImg" src={data.avatar} alt="" />
                        </div>
                        <span className="storiesName">{data.userName}</span>
                    </div>
                ))}
            </div>
        </header>
    );
}

export default Header;