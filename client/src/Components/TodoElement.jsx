import {connect} from 'react-redux';
import axios from 'axios'
const TodoElement = ({id, text, completed, complete, del})=>{

    const handleComplete = async()=>{
        try {
            const res = await axios.post(process.env.REACT_APP_SERVER + 'usertodo/complete', { todoid:id, curstatus:completed });
            const { error } = res.data;
            if (error === null) {
                complete(id, !completed);
            }else{
                console.log(error);
            }
        } catch (err) {
            console.log(err);
        }
    }
    const handleDelete = async()=>{
        try {
            const res = await axios.post(process.env.REACT_APP_SERVER + 'usertodo/delete', { todoid:id });
            const { error } = res.data;
            if (error === null) {
                del(id);
            }else{
                console.log(error);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <div className={`todoelement ${completed ? 'complete':''}`}>
            <button className='C' onClick={handleComplete}>Complete</button>
            <div className='text'>{text}</div>
            <button className='D' onClick={handleDelete}>Delete</button>
        </div>
    );
}


const mapDispatchToProps = dispatch =>{
    return {
        complete: (todoid, curstatus)=> dispatch({type:'COMPLETE_TODO', todoid, curstatus}),
        del: (todoid)=> dispatch({type:'DELETE_TODO', todoid})
    }
  }


export default connect(null, mapDispatchToProps)(TodoElement);