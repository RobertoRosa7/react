import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { create, del, update, init } from '../../actions/billing-cycles'
import ContentHeader from "../../components/content-header/content-header"
import Content from "../../components/content/content"
import FormBillingCycles from '../../components/form-billingcycles/form-billingcycles'
import List from "../../components/list/list"
import TabContent from "../../components/tabs/tabContent"
import TabContents from "../../components/tabs/tabContents"
import TabHeader from "../../components/tabs/tabHeader"
import TabMenu from "../../components/tabs/tabMenu"
import Tabs from "../../components/tabs/tabs"

class BillingCycles extends React.Component {
  componentWillMount() {
    this.props.init()
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
              <TabContents id="tabCreate">
                <FormBillingCycles onSubmit={this.props.create} submitClass="primary" submitLabel="Incluir" />
              </TabContents>
              <TabContents id="tabUpdate">
                <FormBillingCycles onSubmit={this.props.update} submitClass="info" submitLabel="Alterar" />
              </TabContents>
              <TabContents id="tabDelete">
                <FormBillingCycles onSubmit={this.props.del} readOnly={true} submitClass="danger" submitLabel="Excluir" />
              </TabContents>
            </TabContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ create, update, del, init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycles)
