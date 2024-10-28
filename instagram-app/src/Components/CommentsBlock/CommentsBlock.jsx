import React from "react";

function CommentsBlock(){

    return (
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
    )
}

export default CommentsBlock();