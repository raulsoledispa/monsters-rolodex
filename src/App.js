import { Component } from 'react';
import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box'

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
        const filteredMonsters = monsters
            .filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
        <div className="App">
            <h1>Monster Rolodex</h1>
            <SearchBox placeholder="search monster"
                       handleChange={e => this.setState({ searchField: e.target.value})} />
            <CardList monster={filteredMonsters} />
        </div>
    );
  }
}

export default App;
