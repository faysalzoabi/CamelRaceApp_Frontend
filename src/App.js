import React, { Component } from 'react';
import './App.css';
import Noticebar from './components/Noticebar/Noticebar';
import Navbar from './components/Navbar/Navbar';
import TableHeader from './components/TableHeader/TableHeader';
import RacerDetail from './components/RacerDetail/RacerDetail';
import { connect } from 'react-redux';
import { fetchData } from './store/actions';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchData())
  }

  render() {
    const {racers} = this.props
    return (
     
      <div className="container">
            <Noticebar/>
            <Navbar/>
            <TableHeader/>
            {racers.map(racer => {
            return <RacerDetail key={racer.id} racer={racer}/>
            })}
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return{
    racers:state.racers,  
    isAuthenticated: state.token !== null
  }
}
export default connect(mapStateToProps)(App);
