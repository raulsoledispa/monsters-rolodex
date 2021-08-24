import { Component } from 'react';
import { CardList } from './components/card-list/card-list'

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => this.setState( { monsters: response }))
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
        <div className="App">
            <input type="search" placeholder="search monster" onChange={e => this.setState({ searchField: e.target.value})} />
            <CardList monster={filteredMonsters} />
        </div>
    );
  }
}

export default App;
