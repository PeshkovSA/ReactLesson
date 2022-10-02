import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <div className={s.postsBlock}>
                <h3>My post</h3>
            </div>
            <div className={s.postsBlock}>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <MyPost/>
        </div>)
}

export default Profile;