import { useEffect } from 'react';
import TodoElement from './TodoElement';
import Addnew from './Addnew';
import { connect } from 'react-redux';
import axios from 'axios';

const Content = ({todos, selectedListid, settodos})=>{
    useEffect(()=>{
        const fetchtodo = async ()=>{
            if(selectedListid){
                try{
                    const res = await axios.post(process.env.REACT_APP_SERVER + 'usertodo/gettodos', { listid:selectedListid });
                    const { error, todos } = res.data;
                    if (error === null) {
                        settodos(todos);
                    }else{
                        console.log(error);
                    }
                }catch(err){
                    console.log(err);
                }
            }
        }
        fetchtodo();
    },[selectedListid, settodos])
    return (
        <div className='content'>
            <Addnew Label="To Do" addto='todo'/>
            <div id='todolist'>
                {todos?.map(todo=><TodoElement key={todo._id} id={todo._id} text={todo.todotext} completed={todo.completed}/>)} 
            </div>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
      todos: state.todos,
      selectedListid: state.selectedListid
    }
  }
const mapDispatchToProps = dispatch =>{
  return {
    settodos: (todos)=> dispatch({type:'SET_TODOS', todos})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);

