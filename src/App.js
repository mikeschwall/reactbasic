import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends React.Component{

  state = {
    myname:[
      {name:"Peter"},
      {name:"Paul"},
      {name:"Mark"}
    ],
    isfavorite:false,
    text:''
  }

  toggle = () => {
    this.setState({
      isfavorite: !this.state.isfavorite
    })
  }

  handleclick = (id) => {
    const person = [...this.state.myname];
    person.splice(id,1);
    this.setState({
      myname:person
    })
  }

  handlechange = ($event) => {
    this.setState({
      text: $event.target.value
    })
  }

  add = () => {
    const person = [...this.state.myname];
    const obj = {
      name: this.state.text
    }
    person.push(obj);
    this.setState({
      myname: person
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>toggle</button>
      <div className="main">
        {this.state.isfavorite === true ? this.state.myname.map((person,index) => {
          return (
            <Person myname={person.name} click={() => this.handleclick(index)}/>
          )
        }) :null}
      </div>
      <input type="text" value={this.state.text} onChange={this.handlechange}/>
      <button onClick={this.add}>add</button>
      </div>
    );
  }
}

export default App;
