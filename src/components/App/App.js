
import { useEffect, useState } from 'react';
import './app.scss'

import {User} from '../Users/User'
import { SearchBar } from '../SearchBar/SearchBar';
import { UserList } from '../UserList/UserList';

function App() {
  const [users, setUsers]=useState([]);

  const API_URL='https://reqres.in/api/users?page=1';

    useEffect(()=>{
      fetch(API_URL)
      .then((resp)=>resp.json())
      .then (({data})=>setUsers(data))
    },[])

    function handleClick(searchName){
      const filteredUses=users.filter(({first_name,last_name})=>{
        return first_name.toLowerCase().includes(searchName)||last_name.toLowerCase().includes(searchName)
      })
      setUsers(filteredUses)
      console.log(filteredUses)
    }

      
  console.log(users);

  return (
    <div className="App">
    
    <User/>
    <SearchBar whenClick={handleClick}/>
    <UserList users={users}/>
    {/* меняет текст на экране */}
    {/* <div contentEditable>text</div> */}
    </div>
  );
}

export default App;
