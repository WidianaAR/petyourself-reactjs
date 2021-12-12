import React from 'react';
import './style.css';

class Footer_about extends React.Component {

	inputkomen(){
		var n=document.forms['komen']['nama'].value;
		var e=document.forms['komen']['email'].value;
		var p=document.forms['komen']['teks'].value;       
		
		document.forms['komen']['nama'].value='';
		document.forms['komen']['email'].value='';
		document.forms['komen']['teks'].value='';
	
		var tabel = document.getElementById("tabel_pesan");
		var baris = tabel.insertRow(1);
		var kol1 = baris.insertCell(0);
		var kol2 = baris.insertCell(1);
		var kol3 = baris.insertCell(2);
				   
		kol1.innerHTML = n;
		kol2.innerHTML = e;
		kol3.innerHTML = p;
	}

  render() {
      return (
        <div id='footer_about'>
			<form name="komen">
				<table width="90%" align="center">
					<tr>
						<td rowspan="4" style={{"font-size": "40px", "font-family": "cursive"}}>Kontak Kami</td>
						<td colspan="2" style={{"padding-left": "300px", "padding-top": "50px"}}>Nama anda</td>
					</tr>
					<tr>
						<td colspan="2" style={{"padding-left": "300px"}}><input type="text" name="nama"></input></td>
					</tr>
					<tr>
						<td colspan="2" style={{"padding-left": "300px"}}>E-mail anda</td>
					</tr>
					<tr>
						<td colspan="2" style={{"padding-left": "300px"}}><input type="email" name="email"></input></td>
					</tr>
					<tr>
						<td>Silahkan tinggalkan pesan anda,</td>
						<td style={{"padding-left": "300px"}}>Pesan anda</td>
					</tr>
					<tr>
						<td rowspan="3" style={{"vertical-align": "top"}}>pada kolom yang tersedia</td>
					</tr>
					<tr>
						<td colspan="2" style={{"padding-left": "300px"}}><input type="text" style={{height: "150px"}} name="teks"></input></td>
					</tr>
					<tr>
						<td style={{"padding-left": "100px", "text-align": "right"}}><button type="reset">Cancel</button></td>
						<td align="right"><button type="button" onClick={this.inputkomen.bind(this)}>Post</button></td>
					</tr>
				</table>
				<br></br>
				<table border="1em" id="tabel_pesan" width="90%" align="center">
					<thead>
						<tr>
							<th>Nama</th>
							<th>Email</th>
							<th>Pesan</th>
						</tr>
					</thead>
				</table>
				<br></br>
			</form>
		</div>
      );
  }
}

export default Footer_about;