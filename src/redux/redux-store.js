import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

let store = configureStore({reducer: {
        profilePage: profileReducer,
        dialogPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersReducer: usersReducer,
    }});

export default store;