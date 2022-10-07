import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://kartinka-kartinki.ru/wp-content/uploads/2018/11/34.jpg'/>
            </div>
            <div className={s.decriptionBlock}>
                ava+decr
            </div>
        </div>)
}

export default ProfileInfo;