import React from "react";
import ContentHeader from "../../components/content-header/content-header";
import Content from "../../components/content/content";
import Tabs from "../../components/tabs/tabs";
import TabHeader from "../../components/tabs/tabHeader";
import TabContent from "../../components/tabs/tabContent";
import TabMenu from "../../components/tabs/tabMenu";

class BillingCycles extends React.Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclo de pagamento" small="cadastro" />
        <Content>
          <Tabs>
            <TabHeader>
              <TabMenu label="Listar" icon="bars" target="tabList" />
              <TabMenu label="Incluir" icon="plus" target="tabCreate" />
              <TabMenu label="Aleterar" icon="pencil" target="tabUpdate" />
              <TabMenu label="Excluir" icon="trash-o" target="tabDelete" />
            </TabHeader>
            <TabContent>tab content</TabContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycles;
