import Header_notlogin from "./header_notlogin";
import Header_login from "./header_login";

import Isi_index from "./isi_index";
import Isi_about from "./isi_about";
import Isi_about2 from "./isi_about2";
import Isi_shop1 from "./isi_shop1";
import Isi_shop2 from "./isi_shop2";
import Isi_shop3 from "./isi_shop3";
import Isi_shop4 from "./isi_shop4";
import Isi_platform from "./isi_platform";
import Isi_testimoni from "./isi_testimoni";

import Footer_index from "./footer_index";
import Footer_about from "./footer_about";
import Footer from "./footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Isi_register from "./isi_register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/petyourself-reactjs" element={<><Header_notlogin/><Isi_index/><Footer_index/></>}/>
        <Route path="/petyourself-reactjs/register" element={<><Header_notlogin/><Isi_register/><Footer_index/></>}/>
        <Route path="/petyourself-reactjs/about_guest" element={<><Header_notlogin/><Isi_about/><Isi_about2/><Footer_about/></>}/>
        <Route path="/petyourself-reactjs/about" element={<><Header_login/><Isi_about/><Isi_about2/><Footer_about/></>}/>
        <Route path="/petyourself-reactjs/shop1" element={<><Header_login/><Isi_shop1/><Footer/></>}/>
        <Route path="/petyourself-reactjs/shop2" element={<><Header_login/><Isi_shop2/><Footer/></>}/>
        <Route path="/petyourself-reactjs/shop3" element={<><Header_login/><Isi_shop3/><Footer/></>}/>
        <Route path="/petyourself-reactjs/shop4" element={<><Header_login/><Isi_shop4/><Footer/></>}/>
        <Route path="/petyourself-reactjs/platform_guest" element={<><Header_notlogin/><Isi_platform/><Footer/></>}/>
        <Route path="/petyourself-reactjs/platform" element={<><Header_login/><Isi_platform/><Footer/></>}/>
        <Route path="/petyourself-reactjs/testimoni" element={<><Header_login/><Isi_testimoni/><Footer/></>}/>
        <Route path="/petyourself-reactjs/testimoni_guest" element={<><Header_notlogin/><Isi_testimoni/><Footer/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
