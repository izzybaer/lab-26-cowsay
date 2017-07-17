import './style/main.scss';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import React from 'react';
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <header className='hello-navbar'>
        <h1> Generate Cowsay Lorem </h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log('event', e)

    this.setState(state => {
      return {
        content: cowsay.say({
        text: faker.hacker.phrase(),
        e: "oO",
        T: "U",
      })
    }
  })
}

  render(){
    return (
      <div>
        <Navbar />
        <p> {this.state.title} </p>
        <pre> {this.state.content} </pre>
        <button onClick={this.handleClick}> Click Moo </button>
      </div>
      )
    }
  }






ReactDom.render(<App />, document.getElementById('root'));
