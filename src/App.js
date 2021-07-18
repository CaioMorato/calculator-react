import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.sum = this.sum.bind(this);

    this.state = {
      currentNumber: [],
      values: [0, 0],
    };
  }

  handleClick({ target }) {
    const { innerHTML } = target;
    this.setState((prevState) => ({
      currentNumber: [...prevState.currentNumber, innerHTML],
    }));
  }

  sum() {
    const { currentNumber, values } = this.state;
    const number = parseInt(currentNumber.join(''));
    if (values[0] === 0) {
      this.setState((prevState) => ({
        values: [number, 0],
        currentNumber: [],
      }));
    } else {
      this.setState({
        values: [values[0] + number],
        currentNumber: [],
      });
    }
  }

  render() {
    const { currentNumber } = this.state;
    return (
      <main>
        <p className="display">{currentNumber}</p>
        <div>
          <button type="button" onClick={this.handleClick}>
            1
          </button>
          <button type="button" onClick={this.handleClick}>
            2
          </button>
          <button type="button" onClick={this.handleClick}>
            3
          </button>
          <button type="button" onClick={this.handleClick}>
            4
          </button>
          <button type="button" onClick={this.handleClick}>
            5
          </button>
          <button type="button" onClick={this.handleClick}>
            6
          </button>
          <button type="button" onClick={this.handleClick}>
            7
          </button>
          <button type="button" onClick={this.handleClick}>
            8
          </button>
          <button type="button" onClick={this.handleClick}>
            9
          </button>
          <button type="button" onClick={this.handleClick}>
            0
          </button>
          <button type="button" onClick={this.sum}>
            +
          </button>
          <button type="button" onClick={this.operation}>
            -
          </button>
          <button type="button" onClick={this.calculate}>
            Calcular
          </button>
        </div>
      </main>
    );
  }
}

export default App;
