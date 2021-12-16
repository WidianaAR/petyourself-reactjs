import React from 'react';
import './styleindex.css';
import { Link } from "react-router-dom";

class Header_login extends React.Component {
  render() {
      return (
        <div id='header_login'>
		<table align="center" width="90%">
			<td style={{width: "20%"}}><h2>Pet Yourself</h2></td>
			<td style={{width: "10%"}}><Link to="/petyourself-reactjs/about"> About Us </Link></td>
			<td style={{width: "10%"}}><Link to="/petyourself-reactjs/shop1">Shop </Link></td>
			<td style={{width: "10%"}}><Link to="/petyourself-reactjs/testimoni">Testimoni</Link></td>
			<td style={{width: "10%"}}><Link to="/petyourself-reactjs">Logout</Link></td>
			<td width="35%" style={{"vertical-align": "middle", align:"right"}}><img src={require("./gambar/profil.png").default} style={{width: "12%", height: "12%"}}></img></td>
		</table>
	</div>
      );
  }
}

export default Header_login;