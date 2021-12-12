import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class Isi_shop1 extends React.Component {
  render() {
      return (
        <div style={{"background-color": "white", "padding-left": "170px", "padding-right": "110px"}}>
		<table>
			<tr>
				<td><h1>What Kind of Pet Do You Have ?</h1></td>
			</tr>
			<tr>
				<td><Link to="/petyourself-reactjs/shop2"><img src={require("./gambar/cat.png").default} style={{"width": "400px", "height": "300px"}}></img></Link></td>
				<td style={{"padding-left": "200px"}}><Link to="/petyourself-reactjs/shop2"><img src={require("./gambar/dog.png").default} style={{"width": "400px", "height": "300px"}}></img></Link></td>
			</tr>
			<tr>
				<td><Link to="/petyourself-reactjs/shop2"><img src={require("./gambar/fish.png").default} style={{"width": "400px", "height": "300px"}}></img></Link></td>
				<td style={{"padding-left": "200px"}}><Link to="/petyourself-reactjs/shop2"><img src={require("./gambar/hamster.png").default} style={{"width": "400px", "height": "300px"}}></img></Link></td>
			</tr>
			<tr>
				<td colspan="2" style={{"text-align": "center"}}><Link to="/petyourself-reactjs/shop2"><img src={require("./gambar/turtle.png").default} style={{"width": "400px", "height": "300px"}}></img></Link></td>
			</tr>
		</table>
		</div>
      );
  }
}

export default Isi_shop1;