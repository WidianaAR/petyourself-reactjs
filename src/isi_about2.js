import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class Isi_about2 extends React.Component {
  render() {
      return (
        <div id='isi_about2'>
			<table width="90%" align="center">
				<tr>
					<td colspan="5"><h1>What Kind of Pet Do You Have ?</h1></td>
				</tr>
				<tr>
					<td width="18%"><img src={require("./gambar/ikan.png").default} style={{height: "80%", width: "80%"}}></img></td>
					<td width="18%"><img src={require("./gambar/anjing.png").default} style={{height: "80%", width: "80%"}}></img></td>
					<td width="18%"><img src={require("./gambar/kucing3.png").default} style={{height:"65%", width: "65%"}}></img></td>
					<td width="18%"><img src={require("./gambar/hamster2.png").default} style={{"height": "80%", width: "80%"}}></img></td>
					<td width="18%"><img src={require("./gambar/kura.png").default} style={{height: "80%", width: "80%"}}></img></td>
				</tr>
				<br></br><br></br><br></br>
				<tr>
					<td colspan="3"><h1>Kami tersedia di berbagai platform</h1></td>
					<td colspan="3" rowspan="2" align="center"><img src={require("./gambar/sosmed.png").default} style={{height: "250px", width: "400px"}}></img></td>
				</tr>
				<tr>
					<td colspan="3"><Link to="/petyourself-reactjs/platform"><button id="tombol">Cek Disini!</button></Link></td>
				</tr>
				<br></br><br></br><br></br>
			</table>
		</div>
      );
  }
}

export default Isi_about2;