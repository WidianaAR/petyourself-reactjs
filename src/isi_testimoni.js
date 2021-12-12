import React from 'react';
import './style.css';

class Isi_testimoni extends React.Component {

    ulasan(){
        var rates = document.getElementsByName('rate');
        var rate_value;
        for(var i = 0; i < rates.length; i++){
            if(rates[i].checked){
                rate_value = rates[i].value;
            }
        }
    
        var n=document.forms['komen']['nama'].value;
        var t=document.forms['komen']['tanggal'].value;
        var p=document.forms['komen']['teks'].value;       
        
        document.forms['komen']['nama'].value='';
        document.forms['komen']['tanggal'].value='';
        document.forms['komen']['teks'].value='';
    
        var tabel = document.getElementById("tabel_ulasan");
        var baris = tabel.insertRow(2);
        var kol1 = baris.insertCell(0);
        var kol2 = baris.insertCell(1);
        var kol3 = baris.insertCell(2);
        var kol4 = baris.insertCell(3);
                   
        kol1.innerHTML = n;
        kol2.innerHTML = t;
        kol3.innerHTML = p;
        kol4.innerHTML = rate_value+'/5';
    }

  render() {
      return (
        <div id="isi2">
		<table width="90%" align="center">
			<tr>
				<td colspan="5"><h1 style={{"font-family":"cursive", color: "#625353"}}>Testimoni</h1></td>
			</tr>
			<tr><td>
                <form name="komen">
                    <table width="90%" align="center" style={{"background-color": "#FFE898"}}>
                        <tr>
                            <td style={{"padding-top":"10px"}}>Nama</td>
                            <td style={{"padding-top":"10px"}}>Tanggal</td>
                            <td style={{"padding-top":"10px"}}>Komentar</td>
                        </tr>
                        <tr>
                            <td style={{"padding-left":"10px"}}><input type="text" name="nama"></input></td>
                            <td style={{"padding-left":"20px"}}><input type="date" name="tanggal"></input></td>
                            <td style={{"padding-left":"30px"}}><input type="text" name="teks"></input></td>
                            <td>
                                <div class="rating">
                                    <div class="star">
                                        <input type="radio" name="rate" id="star-5" value="5"></input>
                                        <label for="star-5" class="fas fa-star"></label>
                                        <input type="radio" name="rate" id="star-4" value="4"></input>
                                        <label for="star-4" class="fas fa-star"></label>
                                        <input type="radio" name="rate" id="star-3" value="3"></input>
                                        <label for="star-3" class="fas fa-star"></label>
                                        <input type="radio" name="rate" id="star-2" value="2"></input>
                                        <label for="star-2" class="fas fa-star"></label>
                                        <input type="radio" name="rate" id="star-1" value="1"></input>
                                        <label for="star-1" class="fas fa-star"></label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style={{"text-align": "right"}}><button type="reset">Cancel</button></td>
                            <td style={{"text-align": "left"}}><button type="button" onClick={this.ulasan.bind(this)}>Post</button></td>
                        </tr> 
                        <tr>
                            <td colspan="4">
                            <br></br>
                            <table border="0em" id="tabel_ulasan" width="100%" style={{"background-color": "#ffffff"}}>
                                    <tr>
                                        <td colspan="4"><h2>Ulasan</h2></td> 
                                    </tr>
                                    <tr>
                                        <td><h4>Nama</h4></td>
                                        <td><h4>Tanggal</h4></td>
                                        <td><h4>Komentar</h4></td>
                                        <td><h4>Rating</h4></td>
                                    </tr>                           
                            </table> 
                            </td>
                        </tr>
                    </table>
                </form>
            </td></tr>
        </table>
        <br></br>
        </div>
      );
  }
}

export default Isi_testimoni;