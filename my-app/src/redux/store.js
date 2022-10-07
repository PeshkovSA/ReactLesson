import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u?', likesCount: 12},
                {id: 2, message: 'It`s my first post', likesCount: 2},
                {id: 3, message: 'It`s my second post', likesCount: 124},
                {id: 3, message: 'It`s my third post', likesCount: 124},
            ],
            newPostText: 'write here!'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sema'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Ivan'},
                {id: 4, name: 'Anna'},
                {id: 5, name: 'Elena'},
                {id: 6, name: 'Egor'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are u?'},
                {id: 3, message: 'Ok'},
                {id: 4, message: 'Fine'},
                {id: 5, message: 'Great'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state');
    },

    getState() {
        return (this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer( this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}





export default store;
window.store = store;