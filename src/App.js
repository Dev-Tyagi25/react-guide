import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Person from './Person/Person';

//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';

import Validate from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';


class App extends Component {
 // state = {
 //   userName: ["Ram","Shyam","GhanShyam"]
 // };

 // changeUserName = (event) => {
 //   this.setState( {
 //     userName:[event.target.value,"Shyam","GhanShyam"]
 //   });
 // };
  state = {
    person: ""
  };

 lengthHandler = (event) => {
  this.setState({
    person:event.target.value
  })
 };

 removeChar = (index) => {
  const newperson = this.state.person.split('');
  newperson.splice(index,1);
  const newperson1 = newperson.join('');
  this.setState({
    person: newperson1
  })
 }

  render() {
    const list = this.state.person.split('').map((c , index) => {
      return <Char value={c} key={index} click={() => this.removeChar(index)} />;
    });

    return (
      <div className="App">
        <input type="text" onChange={this.lengthHandler} value={this.state.person}/>
        <p>Length = {this.state.person.length}</p>
        <Validate length={this.state.person.length} />
        {list}
      </div>
    );
  }
}

export default App;
