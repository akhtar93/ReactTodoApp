import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: '',
      age: ''
    };
  }
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return (
      <div>
        <p>
          { this.state.counter }
        </p>
        <button onClick={() => {
          this.incrementCounter();
        }}>+ Add</button>
      </div>
    )
  }
}
export default Counter;