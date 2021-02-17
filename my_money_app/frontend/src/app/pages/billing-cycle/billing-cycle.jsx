import React from "react";
import ContentHeader from "../../components/content-header/content-header";
import Content from "../../components/content/content";
import Tabs from "../../components/tabs/tabs";
import TabHeader from "../../components/tabs/tabHeader";
import TabContent from "../../components/tabs/tabContent";
import TabMenu from "../../components/tabs/tabMenu";
import TabContents from "../../components/tabs/tabContents";
import List from "../../components/list/list";

import { selectTab, showTab } from "../../actions/tab-actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class BillingCycles extends React.Component {
  componentWillMount() {
    this.props.selectTab("tabList");
    this.props.showTab("tabList", "tabCreate");
  }
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
            <TabContent>
              <TabContents id="tabList">
                <List />
              </TabContents>
              <TabContents id="tabCreate">Incluir</TabContents>
              <TabContents id="tabUpdate">Alterar</TabContents>
              <TabContents id="tabDelete">Excluir</TabContents>
            </TabContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTab }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycles);
