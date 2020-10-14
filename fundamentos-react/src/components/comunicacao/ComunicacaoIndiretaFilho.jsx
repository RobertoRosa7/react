import React from "react";

export default (props) => {
  const styleButton = {
    width: "100%",
    border: "none",
    outline: "none",
    margin: "10px auto",
    padding: "16px 8px",
    textAlign: "center",
    cursor: "pointer",
  };
  const randomNumber = () => parseInt(Math.random() * 20) + 50;
  const randomNerd = () => Math.random() > 0.5;
  return (
    <div style={{ width: "100%" }}>
      <button
        style={styleButton}
        onClick={(e) =>
          props.quandoClicar("João", randomNumber(), randomNerd())
        }
      >
        Enviar
      </button>
    </div>
  );
};
