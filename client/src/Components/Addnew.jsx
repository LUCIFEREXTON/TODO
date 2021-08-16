import axios from 'axios';
import {useRef} from 'react'
import { connect } from 'react-redux';
const Addnew = ({Label, addto, userId, listId ,addtotodo, addtolist})=>{

    const inputref = useRef(null)

    const handleAdd = async()=>{
        if(addto==='todo' && inputref.current.value!==''){
            const todotext  = inputref.current.value;
            try {
                const res = await axios.post(process.env.REACT_APP_SERVER + 'usertodo/add', { todotext, userId, listId });
                const { error, todo } = res.data;
                if (error === null) {
                    addtotodo(todo)
                    inputref.current.value='';
                }else{
                    console.log(error);
                }
            } catch (err) {
                console.log(err);
            }
        }else if(inputref.current.value!==''){
            const name = inputref.current.value;
            try {
                const res = await axios.post(process.env.REACT_APP_SERVER + 'userlist/add', { name, userId });
                const { error, list } = res.data;
                if (error === null) {
                    addtolist(list);
                    inputref.current.value='';
                }else{
                    console.log(error);
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className='add'>
            <div className='label' >
                New {Label}:
                <input ref={inputref} className='addtodoinput' type = 'text'/>
            </div>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
      userId : state.loggedInUser?._id,
      listId : state.selectedListid
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addtotodo: (todo) => dispatch({type:'ADD_TODO', todo}),
        addtolist: (list) => dispatch({type:'ADD_LIST', list})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addnew);