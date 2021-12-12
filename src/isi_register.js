import React from 'react';
import './styleindex.css';

class Isi_register extends React.Component {
    state = false;

    toggle() {
        if(this.state){
            document.getElementById("password").setAttribute("type","password");
            document.getElementById("eye").style.color='#7a797e';
            this.state=false;
        }
        else{
            document.getElementById("password").setAttribute("type","text");
            document.getElementById("eye").style.color='#5887ef';
            this.state=true;
        }
    }

  render() {
      return (
        <div id='isi_signup'>
		<form name="masuk">
			<div class="side_kanan"><img src={require("./gambar/logincat.png").default} style={{"padding-top": "100px", height: "200px"}}></img></div>
			<table>
				<div class="login">
				<tr>
					<td><h1>SIGN UP</h1></td>
				</tr>
				<tr>
					<td><p>Nama</p></td>
				</tr>
				<tr>
					<td><input type="text" name="nama" placeholder="" id="username"></input></td>
				</tr>
				<tr>
					<td><p>Email</p></td>
				</tr>
				<tr>
					<td><input type="text" name="email" placeholder="" id="email"></input></td>
				</tr>
				<tr>
					<td><p>Password</p>
					</td>
				</tr>
				<tr>
					<td>
						<input type="password" name="sandi" placeholder="" id="password"></input>
						<span>
							<i class="fa fa-eye" aria-hidden="true" id="eye" onClick={this.toggle.bind(this)}></i>
						</span>
					</td>
				</tr>
				<tr>
					<td><p>Confirm Password</p>
					</td>
				</tr>
				<tr>
					<td>
						<input type="password" name="sandi" placeholder="" id="password"></input>
						<span>
							<i class="fa fa-eye" aria-hidden="true" id="eye" onClick={this.toggle.bind(this)}></i>
						</span>
					</td>
				</tr>
				</div>
				<tr>
					<td>
						<button type="reset" class="btn-login">Sign Up</button>
					</td>
				</tr>
				<tr>
					<td><p class="register">Sudah punya akun?<a href="/petyourself-reactjs"> Login disini</a></p></td>
				</tr>
			</table>
		</form>
	    </div>
      );
  }
}

export default Isi_register;