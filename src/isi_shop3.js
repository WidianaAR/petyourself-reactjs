import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class Isi_shop3 extends React.Component {
  render() {
      return (
        <div id='isi'>
		<table>
			<tr>
				<td colspan="10"><img src={require("./gambar/h_cat.png").default} width='100%'></img></td>
			</tr>
			<tr align="center">
				<td rowspan="10" width="25%">
					<div id="side_menu">
						<table>
							<tr><td>
								<img src={require("./gambar/search.png").default} width="10%"></img>
								<input type="text" placeholder="Search"></input>
							</td></tr>
						</table>
						<br></br>
						<table>
							<tr><td>
								<button>All Products</button>
								<button>Best Product</button>
								<h4 align="center">Kategory</h4>
								<button>Cat Grooming</button>
								<button>Dry Foods</button>
								<button>Wet Foods</button>
								<button>Furniture</button>
								<button>Clothing and Accessories</button>
								<button>Travel Carriers</button>
								<button>Shampoo and Conditioner</button>
								<button>Toilets</button>
								<h4 align="center">Sort By</h4>
								<button>Best Seller</button>
								<button>Newest</button>
								<button>Oldest</button>
								<button>Higher Price</button>
								<button>Lowest Price</button>
							</td></tr>
						</table>
					</div>
				</td>
				<td><Link to="/petyourself-reactjs/shop4"><img src={require("./gambar/whiskas.png").default} width="70%"></img></Link></td>
				<td><Link to="/petyourself-reactjs/shop4"><img src={require("./gambar/whiskas.png").default} width="70%"></img></Link></td>
				<td><Link to="/petyourself-reactjs/shop4"><img src={require("./gambar/whiskas.png").default} width="70%"></img></Link></td>
			</tr>
			<tr align="center">
				<td><Link to="/petyourself-reactjs/shop4"><img src={require("./gambar/whiskas.png").default} width="70%"></img></Link></td>
				<td><Link to="/petyourself-reactjs/shop4"><img src={require("./gambar/whiskas.png").default} width="70%"></img></Link></td>
				<td><Link to="/petyourself-reactjs/shop4"><img src={require("./gambar/whiskas.png").default} width="70%"></img></Link></td>
			</tr>
			<tr align="center">
				<td><Link to="/petyourself-reactjs/shop4"><img src={require("./gambar/whiskas.png").default} width="70%"></img></Link></td>
				<td><Link to="/petyourself-reactjs/shop4"><img src={require("./gambar/whiskas.png").default} width="70%"></img></Link></td>
				<td><Link to="/petyourself-reactjs/shop4"><img src={require("./gambar/whiskas.png").default} width="70%"></img></Link></td>
			</tr>
		</table>
	</div>
      );
  }
}

export default Isi_shop3;