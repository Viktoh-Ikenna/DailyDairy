import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import { Landing } from './components/Landing/Landing';
import { Nav} from './components/nav';
import { Footer} from './components/Footer';

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}
const counter = (state) => {
  return {
    name: state.name
  }
}
const setter = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({ type: 'position', payload: name })
    },
    fetch:()=>{
      setTimeout(()=>{
      dispatch({ type: 'server', payload: 5 }) },2000)
    }
  }
}
export default connect(counter,setter)(App);
