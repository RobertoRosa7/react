import React from "react";

export default (props) => {
  return (
    <div>
      {/* método simples  */}
      {/* <FamiliaMembro nome="Jamie" sobrenome={props.sobrenome}/> */}
      {/* <FamiliaMembro nome="Claire" {...props}/> */}
      {/* <FamiliaMembro nome="Brianna" sobrenome="Silva"/> */}

      {/* passando conteudo dentro do elemento e sendo renderizando aqui */}
      {/* {props.children} */}

      {/* passando props para child dentro do elemento e sendo renderizando aqui - único component */}
      {/* {React.cloneElement(props.children, props)}  */}

      {/* passando props com mult child dentro do elemento e sendo renderizando aqui - mult child */}
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, props)
      )}
    </div>
  );
};
