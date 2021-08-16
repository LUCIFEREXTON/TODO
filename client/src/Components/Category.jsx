import {useEffect} from 'react';
import axios from 'axios'
import Addnew from './Addnew';
import ListName from './ListName';
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
const Category = ({auth, logout, lists, loggedInUser, setlists})=>{
    useEffect(()=>{
        const fetchlist = async ()=>{
            if(loggedInUser){
                try{
                    const res = await axios.post(process.env.REACT_APP_SERVER + 'userlist/getlists', { userId:loggedInUser?._id });
                    const { error, lists } = res.data;
                    if (error === null) {
                        setlists(lists);
                    }else{
                        console.log(error);
                    }
                }catch(err){
                    console.log(err);
                }
            }
        }
        fetchlist();
    },[loggedInUser, setlists, auth])
    const onLogout = ()=>{
        Cookies.remove('token');
        logout();
    }
    return (
        <div className='category'>
            <button onClick={onLogout}>
                Logout
            </button>
            <Addnew Label="List" addto='list'/>
            <div className='listnames'>
                {lists?.map(list =><ListName key={list._id} id={list._id} name={list.name} deleteable={list._id!==loggedInUser.defaultListid}/>)}
            </div>
        </div>
    );
}

const mapReducerToProps = state =>{
    return {
        loggedInUser: state?.loggedInUser,
        lists: state.lists,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        logout: ()=>dispatch({type:'LOGOUT'}),
        setlists: (lists)=> dispatch({type:'SET_LISTS', lists})
    }
}
export default connect(mapReducerToProps, mapDispatchToProps)(Category);