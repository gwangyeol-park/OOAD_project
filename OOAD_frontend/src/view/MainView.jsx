import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import '../asset/css/MainView.css'
import ItemService from '../service/ItemService';

const MainView = () => {

    const [items, setItems] = useState([]);
    const [modal, setModal] = useState(false);
    const [item, setItem] = useState({title: ""});

    useEffect(() => {
        ItemService.getItems().then((res) => {
            setItems(res.data);
        });
    }, []);

    const openModal = (e) => {
        // console.log(e.target.id)
        ItemService.getItemById(e.target.id).then((res) => {
            setItem(res.data);
        });
        // console.log(item);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    const joinButtonHandle = async (e) => {
        let user_email = sessionStorage.getItem("user_name");
        if(user_email !== 'null'){
          let res = await ItemService.getItemById(e.target.id);
          let updateItem = res.data;
          if(!Object.keys(updateItem.userList).includes(user_email)){
            updateItem.userList[user_email] = "0";
            await ItemService.updateItem(updateItem);
            alert("신청되었습니다!");
          }
          else {
            alert("이미 신청한 항목입니다!");
          }
        }
        else {
          alert("로그인을 해주세요!");
        }
    }

    return (
        <>
        <Header></Header>
        <div className='card-container'>
            {items.map((item) => (
                <div className="card" id={item.id} onClick={openModal}>
                    <h5 className='card-title'>{item.title}</h5>
                </div>    
            ))}
        </div>
        {modal && (
          <div className='modal-container' onClick={closeModal}>
            <div className='card-detail' onClick={(e) => (e.stopPropagation())}>
              <h1 className='detail-title'>{item.title}</h1>
              <h4 className='detail-author'>{item.author}</h4>
              <div className='detail-location'>위치: {item.location}</div>
              <div className='detail-wage'>시급: {item.wage}</div>
              <div className='detail-date'>날자: {item.date}</div>
              <div className='detail-time'>시간: {item.time}</div>
              <button className='join-btn' id={item.id} onClick={joinButtonHandle}>join</button>
            </div>
          </div>
        )}
        </>
    )
}

export default MainView