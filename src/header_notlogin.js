import React from 'react';
import './styleindex.css';
import { Link } from "react-router-dom";

class Header_notlogin extends React.Component {
  render() {
      return (
        <div id='header_notlogin'>
          <table align="center">
            <td style={{width: "20%"}}><h2 style={{"font-family":"cursive"}}>Pet Yourself</h2></td>
            <td style={{width: "15%"}}> <Link to="/petyourself-reactjs/about_guest"> About Us </Link></td>
            <td style={{width: "15%"}}><Link to="/petyourself-reactjs/testimoni_guest"> Testimoni </Link></td>
            <td style={{width: "30%"}} align="right"><Link to="/petyourself-reactjs" class="border-putih"> Login </Link></td>
            <td style={{width: "20%"}}><Link to="/petyourself-reactjs/register" class="border-putih"> Register </Link></td>
          </table>
        </div>
      );
  }
}

export default Header_notlogin;