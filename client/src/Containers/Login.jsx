import {useState, useRef} from 'react';
import './Containers.css';
import {connect} from 'react-redux'
import axios from 'axios';
import Cookies from 'js-cookie'
const Login = ({setauthstate})=>{

    const [log, setlogin] = useState(false);
    const mailref = useRef(null)
    const pwdref = useRef(null)
    const nameref = useRef(null)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const email = mailref.current.value;
        const password = pwdref.current.value;
        if(log){
            const name = nameref.current.value;
            if(email && email!=='' && password && password!=='' && name && name!==''){
                try {
                    const res = await axios.post(process.env.REACT_APP_SERVER + 'userauth/signup', { email, password, name })
                    if (res.data.error === null) {
                        const { token } = res.data;
                        Cookies.set('token', token, { expires: 7 })
                        setauthstate(true);
                        
                    }else{
                        console.log(res.data.error);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            else{
                console.log('Fill all details')
            }
        }else{
            if(email && email!=='' && password && password!==''){
                try {
                        const res = await axios.post(process.env.REACT_APP_SERVER + 'userauth/login', { email, password })
                        if (res.data.error === null) {
                            const { token } = res.data;
                            Cookies.set('token', token, { expires: 7 })
                            setauthstate(true);
                        }else{
                            console.log(res.data.error);
                        }
                    } catch (err) {
                        console.log(err);
                    }
            }
            else{
                console.log('Fill all details')
            }
        }
    }

    return (
        <div className='loginback'>
            {log? 'SignUp' : 'Login'}
            <label htmlFor='state'>
                New User
                <input id='state' type='checkbox' onChange={()=>{setlogin(login=>!login)}}/>
            </label>
            <div className='loginmodal'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='email'> Email
                    </label>
                    <input ref={mailref} id='email' type="email"/>
                    <br/>
                    <label htmlFor='password'> Password:
                    </label>
                    <input ref={pwdref} id='password' type="password"/>
                    <br/>
                    {log && <><label htmlFor='name'> Name:
                    </label>
                    <input ref={nameref} id='name' type="text"/>
                    <br/></>}
                    <input type='submit'/>
                </form>
            </div>
        </div>
    );
}


const mapDispatchtoProps = dispatch=>{
    return {
        setauthstate: (authstate)=> dispatch({type:'SET_AUTH', authstate})
    }
}

export default connect(null, mapDispatchtoProps)(Login);