import React from 'react';
import { Link } from 'react-router-dom';
import './styleindex.css';

class Isi_index extends React.Component {
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

    login() {
        var username = document.forms['masuk']['nama'].value;
        username = username.toLowerCase();
        var password = document.forms['masuk']['sandi'].value;
        password = password.toLowerCase();
        if (username == "kelompok2" && password == "ares") {
            window.location.href = "/petyourself-reactjs/about";
        } else {
            alert("Periksa kembali Username/Password Anda ! ");
        }
    }

  render() {
      return (
        <div id='isi_index'>
            <form name="masuk">
                <div class="side_kanan"><img src={require("./gambar/logincat.png").default} style={{"padding-top": "100px", height: "200px"}}></img></div>
                <table>
                    <div class="login">
                    <tr>
                        <td><h1>LOGIN</h1></td>
                    </tr>
                    <tr>
                        <td><p>Email / Username</p></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="nama" placeholder="" id="username"></input></td>
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
                    </div>
                    <tr>
                        <td>
                            <div class="lupa">
                            <a href="#">Lupa Password?</a>
                            </div>
                            <button type="button" class="btn-login" onClick={this.login.bind(this)}>Login</button>
                        </td>
                    </tr>
                    <tr>
                        <td><p class="register">Belum punya akun?<Link to="/petyourself-reactjs/register"> Daftar disini</Link></p></td>
                    </tr>
                </table>
            </form>
	    </div>
      );
  }
};

export default Isi_index;