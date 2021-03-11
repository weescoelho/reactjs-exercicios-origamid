import React from "react";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <>
      {produtos.map(({ nome, propriedades }) => (
        <div style={{border: '1px solid', marginBottom: '10px', padding:'1rem'}}>
          <h3>{nome}</h3>
          <ul>
            {propriedades.map((prop) => (
              <li>{prop}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Produtos;
