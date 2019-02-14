import React, { Component } from 'react';
import './App.css';
import Noticebar from './components/Noticebar/Noticebar';
import Navbar from './components/Navbar/Navbar';
import TableHeader from './components/TableHeader/TableHeader';
import RacerDetail from './components/RacerDetail/RacerDetail';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Noticebar/>
        <Navbar/>
        <TableHeader/>
        <RacerDetail/>
      </div>
    );
  }
}

export default App;
