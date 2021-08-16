import {connect} from 'react-redux'
import axios from 'axios'
const ListName = ({id, name, selectedListid, dellist, selectlist, deleteable})=>{
    const onDelete = async(e) =>{
        e.stopPropagation();
        const shouldDelete = window.confirm("Are You sure you want to delete");
        if(shouldDelete){
            try {
                const res = await axios.post(process.env.REACT_APP_SERVER + 'userlist/delete', { listid:id });
                const { error } = res.data;
                if (error === null) {                
                    dellist(id)
                }
                console.log(error);
            } catch (err) {
                console.log(err);
            }
        }
    }
    return (
        <div className={`listname ${id===selectedListid && 'selected'}`} onClick={()=>{selectlist(id)}}>
            {name.toUpperCase()}
            <br />
            {deleteable && <button onClick={onDelete}>Delete</button>}
            <hr />
        </div>
    );
}
const mapReducerToProps = state =>{
    return {
        selectedListid: state.selectedListid
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        dellist: (listid)=>dispatch({type:'DELETE_LIST', listid}),
        selectlist: (listid)=>dispatch({type:'SELECT_LIST', listid})
    }
}
export default connect(mapReducerToProps, mapDispatchToProps)(ListName);