import React, { useState } from "react";
import './main.css';

function Main(props) {
    const [posts, setPosts] = useState(props.postsData || []);
    const [commentStyles, setCommentStyles] = useState({
        position: 'fixed',
        bottom: '-110vh'
    });
    const [selectedComments, setSelectedComments] = useState([]);
    const [selectId, setSelectId] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleLike = (id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                return { ...post, like: !post.like, likes: post.likes + (post.like ? -1 : 1) };
            }
            return post;
        }));
    };

    const getPostComments = (id) => {
        setCommentStyles({ position: 'fixed', bottom: '0', transition: 'all 0.6s' });
        const commentsArray = posts.find(post => post.id === id)?.comments || [];
        setSelectedComments(commentsArray);
        setSelectId(id);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const saveSubmit = () => {
        if (inputValue !== '') {
            setPosts(posts.map(post => {
                if (post.id === selectId) {
                    const newComment = {
                        userName: 'Amart',
                        avatar: 'img/bmw.jpg',
                        comment: inputValue
                    };
                    const updatedComments = [...post.comments, newComment];
                    setSelectedComments(updatedComments);
                    setInputValue('');
                    return { ...post, comments: updatedComments };
                }
                return post;
            }));
        }
    };

    return (
        <main>
            <div className="main">
                {posts.map(post => (
                    <div className="post" key={post.id}>
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
                                <img className="commentBtn" onClick={() => getPostComments(post.id)} src='img/commentIcon.svg' alt="" />
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
                        <div className="commentsNum">View all comments({post.comments.length})</div>
                    </div>
                ))}
            </div>
            <div className="comment-block-parent" style={commentStyles}>
                <div className="comment-block">
                    <hr onClick={() => setCommentStyles({ position: 'fixed', bottom: '-110vh', transition: 'all 0.6s' })} />
                    <h3>Комментарии</h3>
                    <div className="comments-block-podBlock">
                        {selectedComments.length > 0 ? (
                            selectedComments.map((comment, index) => (
                                <div className="comment" key={index}>
                                    <img className="accountAvatar" src={comment.avatar} alt="" />
                                    <div>
                                        <p className="accountName">{comment.userName}</p>
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="noComments">Комментариев пока нету</p>
                        )}
                        <div className="addComment-block">
                            <img className="accountAvatar" src="img/bmw.jpg" alt="" />
                            <input type="text" placeholder="Добавьте комментарий" value={inputValue} onChange={handleInputChange} />
                            <button onClick={saveSubmit}>🡡</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;