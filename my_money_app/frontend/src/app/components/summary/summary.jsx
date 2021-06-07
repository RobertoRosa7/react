import React from 'react'
import Grid from '../grid/grid'
import Row from '../grid/row'
import ValueBox from '../value-box/value-box'

export default ({ credits, debits }) => (
  <Grid cols="12">
    <fieldset>
      <legend>Resumo</legend>
      <Row>
        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credits}`} text="Total de Créditos" />
        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debits}`} text="Total de Débitos" />
        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credits - debits}`} text="Valor Consolidado" />
      </Row>
    </fieldset>
  </Grid>
)