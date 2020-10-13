import React from "react";

export default function Fragmento() {
  return (
    <React.Fragment>
      <span>Cuido com esse erro!</span>
      <span>
        Não há &lt;div&gt; entorno dos elemento &lt;h2&gt; e &lt;p&gt; acima
        usando React.Fragment
      </span>
    </React.Fragment>
  );
}
