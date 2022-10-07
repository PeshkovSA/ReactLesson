const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;