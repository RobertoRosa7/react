import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const truncate = {
    textOverflow:'ellipsis',
    overflow:'hidden',
    whiteSpace:'nowrap'
  }
  const tables = produtos.map((value, index) => (
    <tr key={index} style={{background: index % 2 === 0 ? '#ddd' : '', fontSize: '14px'}}>
      <td>{value.id}</td>
      <td style={truncate}>{value.nome}</td>
      <td>
        {Intl.NumberFormat("pt-BR", {
          currency: "BRL",
          maximumFractionDigits: 2,
        }).format(value.preco)}
      </td>
    </tr>
  ));
  return (
    <div style={{width: '100%',overflowX: 'auto'}}>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>code:</th>
            <th>nome:</th>
            <th>preço:</th>
          </tr>
        </thead>
        <tbody>{tables}</tbody>
      </table>
    </div>
  );
};
