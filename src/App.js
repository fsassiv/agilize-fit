import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Chore from "./components/Chore";

function App() {
  return (
    <>
      <Header />
      <Chore status="open" label="Teste" value="20" />
      <Footer />
    </>
  );
}

export default App;
