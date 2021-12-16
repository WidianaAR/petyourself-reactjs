import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class Cek_button extends React.Component {
  render() {
      if(window.location.pathname=="/petyourself-reactjs/about_guest"){
        return (
            <Link to="/petyourself-reactjs/platform_guest"><button id="tombol">Cek Disini!</button></Link>
        );
      }
      else{
        return (
            <Link to="/petyourself-reactjs/platform"><button id="tombol">Cek Disini!</button></Link>
        );
      }
  }
}

export default Cek_button;