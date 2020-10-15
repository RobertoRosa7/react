import React from "react";

export default class PassoForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => (
    <div>
      <input
        type="number"
        placeholder="digite o passo"
        value={this.props.passo}
        onChange={(e) => this.props.setPasso(+e.target.value)}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          padding: "16px 8px",
          backgroundColor: "#f0f0f0",
          margin: "5px 0",
        }}
      />
    </div>
  );
}
