import React, { useState } from 'react'
import Header from '../component/Header'
import '../asset/css/SignupView.css'
import UserService from '../service/UserService';

const SignupView = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState(true);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const handleFormButtonClick = (e) => {
        let new_user = {
            name: name,
            email: email,
            password: password,
            age: age,
            gender: gender
        }

        if(new_user.name != "" &&
           new_user.email != "" &&
           new_user.password != "" &&
           new_user.age != ""
        ) {
            UserService.signup(new_user);
            alert("회원가입 완료!");
        }
        else {
            alert("*필수 정보를 입력해 주세요!");
        }
    }

    return (
    <>
        <Header/>
        <div className='signup-container'>
            <div className='form-container'>
                <h1>내용 작성</h1>
                <form action="">
                    <div className='form-item'>
                        <label htmlFor="name">name*</label>
                        <input id="name" type="text" onChange={handleNameChange}/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="email">email*</label>
                        <input id="email" type="text" onChange={handleEmailChange}/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="password">password*</label>
                        <input id="password" type="text" onChange={handlePasswordChange} />
                    </div>
                    <div className='form-item'>
                        <label htmlFor="age">age*</label>
                        <input id="age" type="text" onChange={handleAgeChange}/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="gender">gender*</label>
                        <select id="gender" onChange={handleGenderChange}>
                            <option value={true}>Men</option>
                            <option value={false}>Women</option>
                        </select>
                    </div>
                    <div className='btn-container'>
                        <button className='form-btn' onClick={handleFormButtonClick}>submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default SignupView