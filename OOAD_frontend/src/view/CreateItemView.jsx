import React, { useState } from 'react'
import Header from '../component/Header'
import ItemService from '../service/ItemService';
import '../asset/css/CreateItemView.css'

const CreateItemView = () => {

    let user_name = sessionStorage.getItem("user_name");

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState(user_name);
    const [location, setLocation] = useState("");
    const [wage, setWage] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleWageChange = (e) => {
        setWage(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleTimeChange = (e) => {
        setDate(e.target.value);
    }


    const handleFormButtonClick = () => {
        let item = {
            title: title,
            author: author,
            location: location,
            wage: wage,
            date: date,
            time: time,
            userList: {}    
        }
        if(item.title !== '' && item.content !== ''){
            ItemService.postItem(item);
            alert("작성완료!");
        }
        else {
            alert('내용을 입력해 주세요!');
        }
    }
    return (
        <>
        <Header></Header>
        <div className='create-container'>
            <div className='form-container'>
                <h1>내용 작성</h1>
                <form action="">
                    <div className='form-item'>
                        <label htmlFor="title">title*</label>
                        <input id="title" type="text" onChange={handleTitleChange}/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="author">author*</label>
                        <input id="author" type="text" onChange={handleAuthorChange} value={author}/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="location">location*</label>
                        <input id="location" type="text" onChange={handleLocationChange} />
                    </div>
                    <div className='form-item'>
                        <label htmlFor="wage">wage*</label>
                        <input id="wage" type="text" onChange={handleWageChange}/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="date">date*</label>
                        <input id="date" type="text" onChange={handleDateChange}/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="time">time*</label>
                        <input id="time" type="text" onChange={handleTimeChange}/>
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

export default CreateItemView