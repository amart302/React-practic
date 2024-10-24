import React from "react";
import './main.css';
import bmw from '../../img/bmw.jpg';
import bmwM8Competition from '../../img/bmwM8Competition.jpg';
import heart from '../../img/Heart.svg';
import comment from '../../img/Comment.svg';
import share from '../../img/Share.svg';
import bookmark from '../../img/Bookmark.svg';
import amg from '../../img/amg.jpg';
import audi from '../../img/audi.jpg';
import bugatti from '../../img/bugatti.jpg';
import amgPost from '../../img/amgPost.jpg';
import audiPost from '../../img/audiPost.jpg'
import bugattiPost from '../../img/bugattiPost.jpg'

function Main(){

    const posts = [
        {
            userName: 'Amart',
            avatar: bmw,
            imgPost: bmwM8Competition,
            likes: '93 534',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            comments: '44 435'
        },
        {
            userName: 'Muhammad',
            avatar: amg,
            imgPost: amgPost,
            likes: '56 243',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            comments: '28 347'
        },
        {
            userName: 'Arsamak',
            avatar: audi,
            imgPost: audiPost,
            likes: '48 279',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            comments: '16 463'
        },
        {
            userName: 'Musa',
            avatar: bugatti,
            imgPost: bugattiPost,
            likes: '87 645',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            comments: '76 923'
        },
    ]

    const styles ={
        cursor: 'pointer',
    }

    return(
        <main>
            {
                posts.map(post => (
                    <div class="post">
                        <div class="account">
                            <div class="avatarBl">
                                <img class="accountAvatar" src={post.avatar} alt="" />
                        </div>
                        <span class="accountName">{post.userName}</span>
                        <div class="other">
                            <div class="point"></div>
                            <div class="point"></div>
                            <div class="point"></div>
                        </div>
                    </div>
                <div class="postBl">
                    <img class="postImg" src={post.imgPost} alt="" />
                </div>
                <div class="postOptionsBl">
                    <div class="podBlOpions1">
                        <img class="like" style={styles} src={heart} alt="" />
                        <img class="comment" style={styles} src={comment} alt="" />
                        <img class="airplane" style={styles} src={share} alt="" />
                    </div>
                    <div class="podBlOpions2">
                        <img class="bookmark" style={styles} src={bookmark} alt="" />
                    </div>
                </div>
                <div class="description">
                    <p class="likes" >Нравится: <span class="likesNum">{post.likes}</span></p>
                    <p class="postDescription">Amart: <span class="descriptionText">{post.description}</span></p>
                </div>
                <div class="commentsText">View all comments({post.comments})</div>
            </div>
                ))
            }
        </main>
    )
}

export default Main;