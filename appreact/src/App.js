import React, { useState } from "react";
import ButtonModal from "./components/ButtonModal";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Produtos from "./components/Produtos";



const App = () => {

  const [modal,setModal] = useState(false)
  return (
    <div>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal}/>
    </div>
  )
};

export default App;
