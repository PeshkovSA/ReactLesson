import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = () => {

    let posts = [
        {id: 1, message: 'Hi, how are u?', likesCount: 12},
        {id: 2, message: 'It`s my first post', likesCount: 2},
        {id: 3, message: 'It`s my second post', likesCount: 124},
        {id: 3, message: 'It`s my third post', likesCount: 124},
    ]
    let postsElements =
        posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (

        <div className={s.item}>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}


export default MyPost;
