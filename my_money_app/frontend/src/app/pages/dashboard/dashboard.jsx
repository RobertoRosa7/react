import React from "react";
import Content from "../../components/content/content";
import ContentHeader from "../../components/content-header/content-header";
import ValueBox from "../../components/value-box/value-box";
import { connect } from "react-redux";
class Dashboard extends React.Component {
  constructor(props) {
    super();
  }

  formatToReal(num) {
    return new Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(num);
  }

  calcConsolidado(credit, debt) {
    return credit - debt;
  }

  render() {
    const { credit, debt } = this.props.summary;
    const cards = [
      {
        cols: "12 4",
        color: "green",
        icon: "bank",
        value: `R$ ${this.formatToReal(credit)}`,
        text: "Total de créditos",
      },
      {
        cols: "12 4",
        color: "red",
        icon: "credit-card",
        value: `R$ ${this.formatToReal(debt)}`,
        text: "Total de débitos",
      },
      {
        cols: "12 4",
        color: "blue",
        icon: "money",
        value: `R$ ${this.formatToReal(this.calcConsolidado(credit, debt))}`,
        text: "Valor consolidado",
      },
    ];
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <div className="row">
            {cards.map((value, index) => (
              <ValueBox
                key={index}
                cols={value.cols}
                color={value.color}
                icon={value.icon}
                value={value.value}
                text={value.text}
              ></ValueBox>
            ))}
          </div>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  summary: state.dashboard.summary,
});

export default connect(mapStateToProps)(Dashboard);
