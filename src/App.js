import React from 'react';
import Quote from './components/Quote';
import './App.css';
import axios from 'axios';

const firstQuote = {
  character: 'Homer Simpson',
  characterDirection: 'Right',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  quote: 'Facts are meaningless. You could use facts to prove anything that’s even remotely true.'
};
class App extends React.Component {
  state = {
    quote: firstQuote
  };

  getQuote = () => {
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          quote: data[0]
        });
      });
  };

  render() {
    return (
      <div className='App'>
        <Quote quote={this.state.quote} />
        <input
          type='button'
          value='New quote !'
          className='button'
          onClick={this.getQuote}
        />
      </div>
    );
  }
}

export default App;
