import './App.css';
import React, { useState} from 'react';
import Header from './components/Header/Header.js';
import AvailableMeals from './components/Meals/AvailableMeals';

function App() {
  const [list, setList] = useState(0);
  const [users,setUsers] = useState([]);
  const [modalList, setModalList] =  useState(0)


  const itemAddedHandler = (data,final)=>{
    setList(prevState=>prevState+(+data));
    setUsers(prevState=>{
      const updatedState = [...prevState];
      updatedState.push(final)
      const key = 'price';
      const arrayUniqueByKey = [...new Map(updatedState.map(item =>[item[key], item])).values()];
      return arrayUniqueByKey;
    });
  }

  const modalDataHandler = (data)=>{
    setModalList(data)
  }

  return (
    <div className='App'>
      <Header list={list} users={users} onModalData={modalDataHandler}/>
      <AvailableMeals onItems={itemAddedHandler} modalList={modalList}/>
    </div>
  );
}

export default App;
