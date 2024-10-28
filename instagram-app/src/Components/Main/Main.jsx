import React, { useState } from "react";
import './main.css';

function Main() {

    /* componentDidMount() — это метод жизненного цикла компонента в React, 
     который вызывается один раз после того, как компонент будет смонтирован (вставлен) в дерево DOM. */

    /*
        componentDidUpdate() — это метод жизненного цикла в React, который вызывается сразу
        после обновления компонента из-за изменения состояния или props.
    */

    /*
        Метод componentWillUnmount является одним из методов жизненного цикла в классовых 
        компонентах React. Он вызывается непосредственно перед тем, как компонент будет удален из DOM. Этот метод используется для выполнения очистки, такой как отмена подписок, таймеров или остановка сетевых запросов, чтобы избежать утечек памяти.
    */
    //componentWillUnmount + componentDidMount
    
    const postsData = [
        {
            id: 1,
            userName: 'Amart',
            avatar: 'img/bmw.jpg',
            imgPost: 'img/bmwM8Competition.jpg',
            like: false,
            likes: 93534,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            commentsNum: '44 435',
            comments: [
                {
                    userName: 'Muhammad',
                    avatar: 'img/amg.jpg',

                }
            ]
        },
        {
            id: 2,
            userName: 'Muhammad',
            avatar: 'img/amg.jpg',
            imgPost: 'img/amgPost.jpg',
            like: false,
            likes: 56243,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            commentsNum: '28 347'
        },
        {
            id: 3,
            userName: 'Arsamak',
            avatar: 'img/audi.jpg',
            imgPost: 'img/audiPost.jpg',
            like: false,
            likes: 48279,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            commentsNum: '16 463'
        },
        {
            id: 4,
            userName: 'Musa',
            avatar: 'img/bugatti.jpg',
            imgPost: 'img/bugattiPost.jpg',
            like: false,
            likes: 87645,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            commentsNum: '76 923'
        },
    ];

    const [posts, setPosts] = useState(postsData);

    // React.useEffect(() => {
    //     console.log('Контент отобразился');
    // }, []);

    // React.useEffect(() => {
    //     console.log('Контент обновился');
    // }, [posts]);

    // React.useEffect(() => {
    //     console.log('Контент');
    //     return () => {
    //         console.log('Компонент удален');
    //     };
    // }, []);

    const handleLike = (id) => {
        setPosts(posts.map(post => {
                if(post.id == id){
                    return { ...post, like: !post.like, likes: post.likes + (post.like ? -1 : 1)}
                }
                return post;
            })
        );
        
    };

    const [commentStyles, setCommentStyles] = useState({
        position: 'absolute',
        bottom: '-110vh'
    })

    return (
        <main>
            {posts.map(post => (
                <div className="post">
                    <div className="account-parent">
                        <div className="account-info">
                            <div className="avatar-block">
                                <img className="accountAvatar" src={post.avatar} alt="" />
                            </div>
                        <span className="accountName">{post.userName}</span>
                        </div>
                        <div className="other">
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                        </div>
                    </div>
                    <div className="post-block">
                        <img className="postImg" src={post.imgPost} alt="" />
                    </div>
                    <div className="postOptions-block">
                        <div className="podBlOpions1">
                            <img className="likeBtn" onClick={() => handleLike(post.id)} src={post.like ? 'img/redHeartIcon.svg' : 'img/heartIcon.svg'} alt="" />
                            <img className="commentBtn" onClick={() => setCommentStyles({ position: 'absolute', bottom: '0', transition: 'all 0.6s'})} src='img/commentIcon.svg' alt="" />
                            <img className="shareBtn" src='img/shareIcon.svg' alt="" />
                        </div>
                        <div className="podBlOpions2">
                            <img className="bookmarkBtn" src='img/bookmarkIcon.svg' alt="" />
                        </div>
                    </div>
                    <div className="description">
                        <p className="likeNum">Нравится: <span className="likesNum">{post.likes}</span></p>
                        <p className="postDescription">{post.userName}: <span className="descriptionText">{post.description}</span></p>
                    </div>
                    <div className="commentsNum">View all comments({post.commentsNum})</div>
                </div>
            ))}


            <div className="comment-block-parent" style={commentStyles}>
                <div className="comment-block">
                    <hr />
                    <h3>Комментарии</h3>
                    <div className="comments-block-podBlock">
                        <div className="addComment-block">
                            <img className="accountAvatar" src="img/bmw.jpg" alt="" />
                            <input type="text" placeholder="Добавьте комментарий"/>
                            <button>🡡</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;