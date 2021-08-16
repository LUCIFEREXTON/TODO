import axios from 'axios';
const server = 'http://localhost:5000/api/';

const initialState = {
    isAuth: true,
    loggedInUser: null,
    selectedListid: null,
    todos: [],
    lists: []
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const reducer = async(state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATES':
            {
                const { newState } = action
                return {
                    ...state,
                    ...newState
                }
            }
        case 'LOGIN':
            {
                const { email, password } = action.user;
                if (email && password) {
                    try {
                        const res = await axios.post(server + 'userauth/login', { email, password })
                        if (res.data.error === null) {
                            const { loggedInUser, todos, lists, token } = res.data;
                            setCookie('token', token, 7);
                            return {
                                ...state,
                                loggedInUser,
                                isAuth: true,
                                selectedListid: loggedInUser.defaultListid,
                                todos,
                                lists
                            }
                        }
                        console.log(res.data.error);
                        return state
                    } catch (err) {
                        console.log(err);
                        return state
                    }
                } else {
                    return state
                }
            }
        case 'LOGOUT':
            {
                setCookie('token', '', 7);
                return {
                    isAuth: false,
                    loggedInUser: null,
                    selectedListid: null,
                    todos: [],
                    lists: []
                }
            }
        case 'SIGNUP':
            {
                const { email, password, name } = action.user;
                if (email && password && name) {
                    try {
                        const res = await axios.post(server + 'userauth/signup', { email, password, name })
                        if (res.data.error === null) {
                            const { loggedInUser, todos, lists, token } = res.data;
                            setCookie('token', token, 7);
                            return {
                                loggedInUser,
                                isAuth: true,
                                selectedListid: loggedInUser.defaultListid,
                                todos,
                                lists
                            }
                        }
                        console.log(res.data.error);
                        return state
                    } catch (err) {
                        console.log(err);
                        return state
                    }
                } else {
                    return state
                }
            }

        case 'DELETE_TODO':
            {
                const { todoid } = action
                try {
                    const res = await axios.post(server + 'usertodo/delete', { todoid, listId: state.selectedListid });
                    const { error } = res.data;
                    if (error === null) {
                        return {
                            ...state,
                            todos: state.todos.filter(curtodo => curtodo._id !== todoid)
                        }
                    }
                    console.log(error);
                } catch (err) {
                    console.log(err);
                    return state
                }
                return state
            }
        case 'COMPLETE_TODO':
            {
                try {
                    const res = await axios.post(server + 'usertodo/complete', { todoid, curstatus });
                    const { error } = res.data;
                    if (error === null) {
                        return {
                            ...state,
                            todos: state.todos.map(curtodo => curtodo._id === todoid ? {...curtodo, completed: !curstatus } : {...curtodo })
                        }
                    }
                    console.log(error);
                } catch (err) {
                    console.log(err);
                    return state
                }
                return state
            }
        case 'ADD_LIST':
            {
                const userId = state.loggedInUser.id;
                const { name } = action
                try {
                    const res = await axios.post(server + 'userlist/add', { name, userId });
                    const { error, list } = res.data;
                    if (error === null) {
                        return {
                            ...state,
                            lists: state.lists.concat(list),
                            selectedListid: list._id
                        }
                    }
                    console.log(error);
                } catch (err) {
                    console.log(err);
                    return state
                }
                return state
            }
        case 'DELETE_LIST':
            {
                const { listid } = action
                try {
                    const res = await axios.post(server + 'userlist/delete', { listid });
                    const { error } = res.data;
                    if (error === null) {
                        return {
                            ...state,
                            selectedListid: state.loggedInUser.defaultListid,
                            lists: state.lists.filter(list => list._id !== listid)
                        }
                    }
                    console.log(error);
                } catch (err) {
                    console.log(err);
                    return state
                }
                return state
            }
        case 'SELECT_LIST':
            {
                const { listid } = action
                return {
                    ...state,
                    selectedListid: action.listid,
                }
            }
        default:
            return state;

    }
}

export default reducer;

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}