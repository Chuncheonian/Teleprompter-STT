import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PrompterPage from './pages/PrompterPage';

class App extends Component {
  render() {
    return (
      <>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/prompter" component={PrompterPage} exact={true} />
      </>
    );
  }
}

export default App;