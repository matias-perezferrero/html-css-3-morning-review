import React, { Component } from 'react';
import './reset.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.dropdown = React.createRef();
  }

  flipShow = () => {
    console.log(this.dropdown.current);
    let { current } = this.dropdown;
    if (current.classList.contains('show-animation')) {
      current.classList.add('hide-animation');
      current.classList.remove('show-animation');
    } else {
      current.classList.add('show-animation');
      current.classList.remove('hide-animation');
    }
  };

  render() {
    return (
      <div>
        <nav>
          <span className="nav-title">Start Bootstrap</span>
          <i className="fas fa-bars" onClick={this.flipShow} />
          <span className="nav-links">Home</span>
          <span className="nav-links">About</span>
          <span className="nav-links">Services</span>
          <span className="nav-links">Contact</span>
        </nav>
        <div className="dropdown" ref={this.dropdown}>
          <span>Hellllllo</span>
          <span>Test</span>
        </div>
        {/* <div className="square" />
        <div className="slider" /> */}
      </div>
    );
  }
}

export default App;
