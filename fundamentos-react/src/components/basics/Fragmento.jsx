import React from "react";

export default function Fragmento() {
  return (
    <React.Fragment>
      <h2>Fragmento</h2>
      <p>Cuido com esse erro!</p>
      <span>
        Não há &lt;div&gt; entorno dos elemento &lt;h2&gt; e &lt;p&gt; acima
        usando React.Fragment
      </span>
    </React.Fragment>
  );
}
