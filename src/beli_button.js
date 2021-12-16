import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class Beli_button extends React.Component {
  render() {
      if(window.location.pathname=="/petyourself-reactjs/about_guest") {
        return (
            <Link to="/petyourself-reactjs"><button id="tombol" style={{width: "80%"}}>Beli sekarang!</button></Link>
        );
      }
      else{
        return (
            <Link to="/petyourself-reactjs/shop1"><button id="tombol" style={{width: "80%"}}>Beli sekarang!</button></Link>
        );
      }
  }
}

export default Beli_button;