import React from "react";
import Produto from "./components/Produto";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function fetchData(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    console.log(json)
    setData(json);
    setLoading(false);
  }

  return (
    <>
      <button onClick={fetchData}>Tablet</button>
      <button onClick={fetchData}>Notebook</button>
      <button onClick={fetchData}>Smartphone</button>
      {loading && <p>Carregando...</p> }
      {!loading && data && <Produto data={data}/> }
    </>
  );
};

export default App;
