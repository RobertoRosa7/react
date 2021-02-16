import React from "react";
import ContentHeader from "../../components/content-header/content-header";
import Content from "../../components/content/content";

class BillingCycles extends React.Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclo de pagamento" small="cadastro" />
        <Content></Content>
      </div>
    );
  }
}

export default BillingCycles;
