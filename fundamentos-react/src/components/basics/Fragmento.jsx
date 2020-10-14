import React from "react";

export default function Fragmento() {
  return (
    <React.Fragment>
      <div>Cuido com esse erro!</div>
      <div>
        Não há &lt;div&gt; entorno dos elemento &lt;h2&gt; e &lt;p&gt; acima
        usando React.Fragment
      </div>
    </React.Fragment>
  );
}
