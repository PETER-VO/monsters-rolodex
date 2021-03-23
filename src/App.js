import './App.css';
import {React, Component} from 'react';
import {CardList} from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box';

class App extends Component{

  constructor(){
    super();

    this.state = {
      searchField:"",
      monsters:[]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  render(){
    const {searchField, monsters} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder="search monster" handleChange={(e) => {this.setState({searchField : e.target.value})}}/>
          <CardList monsters={filterMonsters} />
      </div>
    )
  }
}


export default App;
