import { Component } from 'react';
import { CardList } from './components/card-list/card-list'

import './App.css';

const monsters = [
    {
        name: 'Monter 1',
        email: 'm1@gmail.com'
    },
    {
        name: 'Monter 2',
        email: 'm2@gmail.com'
    },
    {
        name: 'Monter 3',
        email: 'm3@gmail.com'
    },
    {
        name: 'Monter 4',
        email: 'm4@gmail.com'
    }
];
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => this.setState( { monsters: response }))
    }

    render() {
    return(
        <div className="App">
          <CardList monster={this.state.monsters} />
        </div>
    );
  }
}

export default App;
