const initialState = {
    isAuth: false,
    loggedInUser: null,
    selectedListid: null,
    todos: [],
    lists: []
}

const reducer = (state = initialState, action) => {
    // console.log('[logging action]:', JSON.stringify(action));
    switch (action.type) {
        case 'SET_AUTH':
            {
                return {
                    ...state,
                    isAuth: action.authstate
                }
            }
        case 'SET_USER':
            {
                return {
                    ...state,
                    loggedInUser: {...action.user },
                    selectedListid: action.user.defaultListid
                }
            }
        case 'LOGOUT':
            {
                return {
                    isAuth: false,
                    loggedInUser: null,
                    selectedListid: null,
                    todos: [],
                    lists: []
                }
            }
        case 'SET_TODOS':
            {
                return {
                    ...state,
                    todos: [...action.todos]
                }
            }
        case 'SET_LISTS':
            {
                return {
                    ...state,
                    lists: [...action.lists]
                }
            }
        case 'ADD_TODO':
            {
                const { todo } = action
                return {
                    ...state,
                    todos: state.todos.concat(todo)
                }
            }
        case 'ADD_LIST':
            {
                const { list } = action
                return {
                    ...state,
                    lists: state.lists.concat(list)
                }
            }
        case 'COMPLETE_TODO':
            {
                const { todoid, curstatus } = action;
                return {
                    ...state,
                    todos: state.todos.map(curtodo => curtodo._id === todoid ? {...curtodo, completed: curstatus } : {...curtodo })
                }
            }
        case 'DELETE_TODO':
            {
                const { todoid } = action
                return {
                    ...state,
                    todos: state.todos.filter(curtodo => curtodo._id !== todoid)
                }
            }
        case 'SELECT_LIST':
            {
                const { listid } = action
                return {
                    ...state,
                    selectedListid: listid
                }
            }
        case 'DELETE_LIST':
            {
                const { listid } = action
                return {
                    ...state,
                    selectedListid: state.loggedInUser.defaultListid,
                    lists: state.lists.filter(list => list._id !== listid)
                }
            }
        default:
            return state
    }
}
export default reducer;