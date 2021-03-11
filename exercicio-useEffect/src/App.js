import React, { useState } from "react";
import Product from "./components/Product";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [product, setProduct] = useState(localStorage.getItem("product"));

  async function fetchProduct(event) {
    const productName = event.target.innerText.toLowerCase();
    setProduct(productName);
    localStorage.setItem("product", productName);
  }

  // Busca dados na API com base no LocalStorage

  return (
    <>
      <h1>
        Produto: <span>{product}</span>
      </h1>
      <button style={{ margin: "1rem" }} onClick={fetchProduct}>
        Notebook
      </button>
      <button style={{ margin: "1rem" }} onClick={fetchProduct}>
        Smartphone
      </button>
      <Product product={product} />
    </>
  );
};

export default App;
