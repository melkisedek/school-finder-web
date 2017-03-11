import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import * as firebase from 'firebase';


class SchoolList extends React.Component {
  render() {
    var schoolList = this.props.schools
    var list = schoolList.map((school, index) => 
        (
          <li key={ index.toString() }>
          { school }
          {console.log(school)}
          <span style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>
            X
          </span>
        </li>
        )
      );

      // console.log(list);
      return <ul>{ list }</ul>;
  }
}


class App extends Component {

  constructor(){
    super();
    this.state = {
      school: "Hello from Localhost",
      schools: [],
      text: ''
    }
  }

  // componentWillMount() {
  //   this.firebaseRef = firebase.database().ref();
  //   this.firebaseRef.on('value', function(dataSnapshot) {
  //     var schools = [];
  //     dataSnapshot.forEach(function(childSnapshot) {
  //       var school = childSnapshot.val();
  //       school['.key'] = childSnapshot.key;
  //       schools.push(school);
  //       this.setState({
  //         schools: schools
  //       });
  //     });

      
  //   });
  // }

  componentDidMount(){
    const gamesRef = firebase.database().ref().orderByKey();
    var allSchools =[];

    gamesRef.once('value', snap => {
      snap.forEach((childSnapshot, index) => {
        allSchools.push(childSnapshot.val());
      });
    });

    const rootRef = firebase.database().ref().child('schools');
    const testRef = rootRef.child('test');
    testRef.on('value', snapshot =>{
      this.setState({
        schools: allSchools,
        school: snapshot.val(),
      })
    });
  }

  // cleaning up the Firebase event handler
  componentWillUnmount() {
    this.firebaseRef.off();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> 
          <SchoolList schools={this.state.schools}/>
          <code>{this.state.school}</code>
      </div>
    );
  }
}

export default App;
