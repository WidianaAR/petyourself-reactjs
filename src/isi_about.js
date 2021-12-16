import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class Isi_about extends React.Component {
  render() {
      return (
        <div id='isi_about'>
			<table width="80%" align="center">
				<tr>
					<td width="65%" align="center"><img src={require('./gambar/about.png').default} style={{width: "40%", height: "40%"}}></img></td>
					<td rowspan='2' width="35%" align="center"><img src={require('./gambar/about2.png').default} style={{width: "100%", height: "100%"}}></img></td>
				</tr>
				<tr>
					<td style={{"text-align": "justify"}} width="65%" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque odio tellus turpis quam gravida. Diam ultrices eleifend commodo iaculis viverra dictum sit. Vitae turpis turpis morbi eget vitae scelerisque. Morbi amet in potenti egestas. Dictum quis accumsan viverra orci augue adipiscing urna elementum viverra. Et tincidunt in morbi scelerisque ac scelerisque a, egestas id. Nam sed eget in adipiscing leo sit sollicitudin lacinia. Turpis viverra ipsum nunc, enim sed aenean non. Consequat interdum parturient faucibus placerat massa. Erat mi viverra sit eu faucibus eget rutrum consectetur bibendum. Justo, risus, condimentum in placerat.</td>
				</tr>
				<tr>
					<td style={{"text-align": "center", "padding-bottom": "50px"}} width="65%" align="center">
					{(() => {
						if (window.location.pathname=="/petyourself-reactjs/about_guest"){
							return (
								<Link to="/petyourself-reactjs"><button id="tombol" style={{width: "80%"}}>Beli sekarang!</button></Link>
							)
						}
						return <Link to="/petyourself-reactjs/shop1"><button id="tombol" style={{width: "80%"}}>Beli sekarang!</button></Link>;
					})()}
					</td>
				</tr>
			</table>
		</div>
      );
  }
}

export default Isi_about;