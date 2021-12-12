import React from 'react';
import './styleindex.css';
import image from './gambar/footer.png';

class Footer_index extends React.Component {
  render() {
      return (
        <div id="footer_index">
            <table align="center" width="100%">
                <td><img src={image} width="100%" height="115px"></img></td>
            </table>
        </div>
      );
  }
}

export default Footer_index;