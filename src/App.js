import { Header } from './layout/Header';
import { Foother } from './layout/Foother';
import { Main } from './layout/Main';
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Foother />
      </div>
    );
  }
}

export default App;
