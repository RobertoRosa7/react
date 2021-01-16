import React from "react";
import Content from "../../components/content/content";
import ContentHeader from "../../components/content-header/content-header";

class Dashboard extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content />
      </div>
    );
  }
}

export default Dashboard;
