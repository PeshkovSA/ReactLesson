import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav className={s.nav}>
        <div className={s.item}>
            <a href={'/profile'} className= { navData => navData.isActive ? s.active : s.item }>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href={'/dialogs'} className= { navData => navData.isActive ? s.active : s.item }>Messages</a>
        </div>
        <div className={s.item}>
            <a href={'/news'} className= { navData => navData.isActive ? s.active : s.item }>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
    )
}

export default Navbar;