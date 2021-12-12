import React from 'react';
import './style.css';

class Isi_platform extends React.Component {
  render() {
      return (
        <div id='isi' style={{"background-color": "white", "padding-left": "270px" , "padding-right": "1028px" , "padding-bottom": "50px"}}>
            <table>
                <tr>
                    <td style={{"padding-left": "300px"}}><h1 style={{"font-family":"cursive", "color": "#625353"}} >Platforms</h1></td>
                </tr>
                <tr>
                    <td><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={require("./gambar/platform1.png").default} style={{"width": "314px", "height": "101px"}}></img></a></td>
                    <td style={{"padding-left": "10px"}}><a href="https://www.whatsapp.com/download" target="_blank" rel="noopener noreferrer"><img src={require("./gambar/platform2.png").default} style={{"width": "314px", "height": "101px"}}></img></a></td>
                </tr>
                <tr>
                    <td><a href="https://www.shopee.com/" target="_blank" rel="noopener noreferrer"><img src={require("./gambar/platform3.png").default} style={{"width": "314px", "height": "101px"}}></img></a></td>
                    <td style={{"padding-left": "10px"}}><a href="https://www.tokopedia.com/" target="_blank" rel="noopener noreferrer"><img src={require("./gambar/platform4.png").default} style={{"width": "314px", "height": "101px"}}></img></a></td>
                </tr>
                <tr>
                    <td><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={require("./gambar/platform5.png").default} style={{"width": "314px", "height": "101px"}}></img></a></td>
                    <td style={{"padding-left": "10px"}}><a href="https://line.me/id/" target="_blank" rel="noopener noreferrer"><img src={require("./gambar/platform6.png").default} style={{"width": "314px", "height": "95px"}}></img></a></td>
                </tr>
            </table>
	    </div>
      );
  }
}

export default Isi_platform;