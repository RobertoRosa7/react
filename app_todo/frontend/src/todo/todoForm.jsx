import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default (props) => (
  <form role="form" onSubmit={props.handleSearch}>
    <Grid cols="12 9 10">
      <input
        type="text"
        className="form-control"
        placeholder="Adicione uma tarefa"
        id="description"
        onChange={props.handleChange}
        value={props.description}
      />
    </Grid>

    <Grid cols="12 3 2">
      <IconButton style="info" icon="search" onClick={props.handleSearch} />
      <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
      <IconButton style="default" icon="close" onClick={props.handleClear} />
    </Grid>
  </form>
);
