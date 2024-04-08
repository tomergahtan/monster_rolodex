
import './App.css';
import { useState,useEffect } from 'react';
//import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

function App() {
 
  const [searchField, setSearchField] = useState('');
  const [title,setTitle] = useState('Monster Rolodex'); // this is a hook. it changes the value wheneve it been called
  const [monsters, setMonsters] = useState([]);
  const [filteredmonsters, setFilteredMonsters] = useState(monsters) // this is a hook. it changes the value
  
  useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
    .then(users => setMonsters(users));
    
    },[])



  const onsearchchange = (event) =>{
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
    
    
  };

  // const onTitleChange = (event) =>{
  //   setTitle(event.target.value);

  // }


  useEffect(()=>{
    const newfilteredmonsters = monsters.filter((mon)=> mon.name.includes(searchField));
    setFilteredMonsters(newfilteredmonsters);
  },[monsters,searchField])
  
 





  return( <div className="App">


   <h1 className='app-title'>{title}</h1>


   <SearchBox 
      onChangeHandler = {onsearchchange}
      className = 'monsters-search-box'
      placeholder = 'Search Monster'
    />

  <Cardlist monsters = {filteredmonsters} />
   </div>)
 }

export default App;
