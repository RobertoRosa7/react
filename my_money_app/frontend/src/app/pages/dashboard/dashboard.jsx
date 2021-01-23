import React from "react";
import Content from "../../components/content/content";
import ContentHeader from "../../components/content-header/content-header";
import ValueBox from "../../components/value-box/value-box";

class Dashboard extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const cards = [
      {
        cols: "12 4",
        color: "green",
        icon: "bank",
        value: "R$ 10,00",
        text: "Total de créditos",
      },
      {
        cols: "12 4",
        color: "red",
        icon: "credit-card",
        value: "R$ 15,99",
        text: "Total de créditos",
      },
      {
        cols: "12 4",
        color: "blue",
        icon: "money",
        value: "R$ 23,99",
        text: "Total de créditos",
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

export default Dashboard;
