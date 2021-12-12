import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class Isi_shop2 extends React.Component {
  render() {
      return (
        <div id='isi'>
		<table>
			<tr>
				<td><Link to="/petyourself-reactjs/shop3"><img src={require("./gambar/grooming.png").default} style={{"width": "210px", "height": "240px", "padding-left":"25px"}}></img></Link></td>
				<td style={{"padding-left":"65px"}}><Link to="/petyourself-reactjs/shop3"><img src={require("./gambar/dry.png").default} style={{"width": "210px", "height": "240px"}}></img></Link></td>
				<td style={{"padding-left":"65px"}}><Link to="/petyourself-reactjs/shop3"><img src={require("./gambar/wet.png").default} style={{"width": "210px", "height": "240px"}}></img></Link></td>
				<td style={{"padding-left":"65px"}}><Link to="/petyourself-reactjs/shop3"><img src={require("./gambar/furniture.png").default} style={{"width": "210px", "height": "240px"}}></img></Link></td>
			</tr>
			<tr>
				<td><Link to="/petyourself-reactjs/shop3"><img src={require("./gambar/wet.png").default} style={{"width": "220px","height": "240px", "padding-left":"25px"}}></img></Link></td>
				<td style={{"padding-left":"65px"}}><Link to="/petyourself-reactjs/shop3"><img src={require("./gambar/travel.png").default} style={{"width": "220px", "height": "240px"}}></img></Link></td>
				<td style={{"padding-left":"65px"}}><Link to="/petyourself-reactjs/shop3"><img src={require("./gambar/shampoo.png").default} style={{"width": "220px", "height": "240px"}}></img></Link></td>
				<td style={{"padding-left":"65px"}}><Link to="/petyourself-reactjs/shop3"><img src={require("./gambar/toilets.png").default} style={{"width": "220px", "height": "240px"}}></img></Link></td>
			</tr>"
		</table>
	</div>
      );
  }
}

export default Isi_shop2;