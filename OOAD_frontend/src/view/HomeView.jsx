import React, { useState } from 'react'
import Header from '../component/Header'
import '../asset/css/HomeView.css'
import UserService from '../service/UserService';
import { Navigate, useNavigate } from 'react-router-dom';

const HomeView = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        let user = {
          id: "",
          email: email,
          password: password,
          name: "",
          age: "",
          gender: false
        }
        sessionStorage.setItem("user_name", null);
        UserService.login(user).then((res) => {
          if(res.data){
            sessionStorage.setItem("user_name", user.email);
            alert("로그인 성공!");
            navigate('/main');
          }
          else {
            alert('정확한 email과 password를 입력해 주세요!');
          }
        });
      };

    return (
        <>
            <Header/>
            <div className='login-container'>
                <form className='login-form'>
                    <input 
                        id="email" 
                        placeholder='Email'
                        type="text"
                        value={email}
                        onChange={handleEmailChange}    
                    />
                    <input 
                        type="text" 
                        id="password" 
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button className='summit-btn' onClick={handleLogin}>로그인</button>
                </form>
            </div>
        </>
    )
}

export default HomeView