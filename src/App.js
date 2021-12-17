import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.component';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const onChange = (e) => {
    console.log(e.target.value);
    let m = monsters.filter(monster => monster.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFiltered([...m]);

  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setFiltered(users);
        setMonsters(users);
      });
  }, []);

  return (
    <div className="App">
      <h1>MONSTERS ROLODEX</h1>
      <Search onChange={onChange} placeholder='Search Monsters'/>
      <CardList monsters={filtered} />
    </div>
  );
}

export default App;
