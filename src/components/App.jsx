import React, { Component } from 'react';
import Slider from "./Slider";

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1 className="App-title">React</h1>
          </header>
          <section>
              <p className="App-intro">
                  carousel test
              </p>
          </section>
          <section className='main'>
              <Slider/>
          </section>
      </div>
    );
  }
}

export default App;
