import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer store={props.store}/>}/>
                        <Route path="/profile" element={<Profile store={props.store}/>}/>
                        <Route path="/users" element={<UsersContainer/ >}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)

}

export default App;
