import "./css/style.css"
import Header from "./component/Header";
import Footer from "./component/Footer";
import Help from "./component/Help";
import Container from "./component/Container";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
      <Help></Help>
    </>
  );
}

export default App;
