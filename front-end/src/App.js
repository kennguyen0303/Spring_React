import React, {Component} from 'react';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      proposals: [],
    };
  }

//saw this sort of setup on a tutorial
  componentDidMount() {
    fetch('/employees')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then((values) => { 
      console.log(values);
      console.log(values._embedded.employees[0].firstName.toString());
      this.setState({ proposals: values._embedded.employees[0].firstName.toString()}); 
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Also, here are some proposals.
        </p>
        <div className="proposal-container">
          {this.state.proposals}
        </div>
      </div>
    );
  }
}

export default App;