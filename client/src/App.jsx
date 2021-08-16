import { useEffect} from 'react';
import * as jwt from 'jsonwebtoken';
import Cookies from 'js-cookie'
import Login from './Containers/Login'
import Home from './Containers/Home'
import {connect } from 'react-redux'

function App({auth, setauthstate, setuser}) {
  useEffect(()=>{
    const token = Cookies.get('token');
    if(token && !auth){
      const user = jwt.verify(token, process.env.REACT_APP_SECRET)._doc
      setuser(user);
      setauthstate(true);
    }
  },[setauthstate, setuser, auth])

  return (auth ? <Home/>:<Login/>);
}

const mapStateToProps = state =>{
  return {
    auth: state.isAuth
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    setauthstate: (authstate)=> dispatch({type:'SET_AUTH', authstate}),
    setuser: (user)=> dispatch({type:'SET_USER', user})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
