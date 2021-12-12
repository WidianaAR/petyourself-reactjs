import React from 'react';
import './style.css';

class Footer extends React.Component {
  render() {
      return (
        <div id="footer">
            <table>
                <td><h1>Pet Yourself</h1></td>
                <td style={{"padding-left":"900px"}}>
                    <table>
                        <tr>
                            <td style={{"vertical-align": "top"}}><img src={require("./gambar/ig.png").default} style={{"width": "25px", "height": "25px"}}></img></td>
                            <td style={{"padding-left":"10px"}}>@pet_yourself</td>
                        </tr>
                        <tr>
                            <td style={{"vertical-align": "top"}}><img src={require("./gambar/wa.png").default} style={{"width": "25px", "height": "25px"}}></img></td>
                            <td style={{"padding-left":"10px"}}>082542684584</td>
                        </tr>
                    </table>
                </td>
            </table>
	    </div>
      );
  }
}

export default Footer;