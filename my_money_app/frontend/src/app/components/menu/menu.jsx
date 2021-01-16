import React from "react";
import MenuItem from "../menu-item/menu-itens";
import MenuTree from "../menu-tree/menu-tree";

export default (props) => (
  <ul className="sidebar-menu">
    <MenuItem path="#/" label="Dashboard" icon="dashboard" />
    <MenuTree label="Cadastro" icon="edit">
      <MenuItem path="#billingCycles" icon="usd" label="Ciclo de pagamentos" />
    </MenuTree>
  </ul>
);
