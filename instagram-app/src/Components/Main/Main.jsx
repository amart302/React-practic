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
            comments: '44 435'
        },
        {
            id: 2,
            userName: 'Muhammad',
            avatar: 'img/amg.jpg',
            imgPost: 'img/amgPost.jpg',
            like: false,
            likes: 56243,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            comments: '28 347'
        },
        {
            id: 3,
            userName: 'Arsamak',
            avatar: 'img/audi.jpg',
            imgPost: 'img/audiPost.jpg',
            like: false,
            likes: 48279,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            comments: '16 463'
        },
        {
            id: 4,
            userName: 'Musa',
            avatar: 'img/bugatti.jpg',
            imgPost: 'img/bugattiPost.jpg',
            like: false,
            likes: 87645,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
            comments: '76 923'
        },
    ];

    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState(postsData);
    const [component, setComponent] = useState('abc');

    React.useEffect(() => {
        console.log('Контент отобразился');
    }, []);

    React.useEffect(() => {
        console.log('Контент обновился');
    }, [posts, count]);

    React.useEffect(() => {
        console.log('Контент');
        return () => {
            console.log('Компонент удален');
        };
    }, []);

    const styles = {
        cursor: 'pointer',
    };

    const handleLike = (id) => {
        setPosts(prevPosts => 
            prevPosts.map(post => 
                post.id == id ? { ...post, like: !post.like, likes: post.likes + (post.like ? -1 : 1) } : post
            )
        );
        
    };

    return (
        <main>
            {posts.map(post => (
                <div className="post">
                    {/* {component}
                    <button onClick={() => setComponent('')}>Delete component</button>
                    <div>
                        <button onClick={() => (count > 0) ? setCount(count - 1) : count}>-</button>
                        <p>{count}</p>
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div> */}
                    <div className="account">
                        <div className="avatarBl">
                            <img className="accountAvatar" src={post.avatar} alt="" />
                        </div>
                        <span className="accountName">{post.userName}</span>
                        <div className="other">
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                        </div>
                    </div>
                    <div className="postBl">
                        <img className="postImg" src={post.imgPost} alt="" />
                    </div>
                    <div className="postOptionsBl">
                        <div className="podBlOpions1">
                            <img className="like" onClick={() => handleLike(post.id)} style={styles} src={post.like ? 'img/redHeart.png' : 'img/Heart.svg'} alt="" />
                            <img className="comment" style={styles} src='img/Comment.svg' alt="" />
                            <img className="airplane" style={styles} src='img/share.svg' alt="" />
                        </div>
                        <div className="podBlOpions2">
                            <img className="bookmark" style={styles} src='img/bookmark.svg' alt="" />
                        </div>
                    </div>
                    <div className="description">
                        <p className="likes">Нравится: <span className="likesNum">{post.likes}</span></p>
                        <p className="postDescription">{post.userName}: <span className="descriptionText">{post.description}</span></p>
                    </div>
                    <div className="commentsText">View all comments({post.comments})</div>
                </div>
            ))}
        </main>
    );
}

export default Main;