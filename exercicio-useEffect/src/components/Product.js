import React, { useEffect, useState } from "react";

const Product = ({ product }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (product === null) return null;
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [product]);
  
  if (data === null) return null;
  return (
    <div>
      <h2>{data.nome}</h2>
      <p>R$ {data.preco}</p>
    </div>
  );
};
export default Product;
