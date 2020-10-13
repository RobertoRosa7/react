import React from 'react'
import FamiliaMembro from './FamiliaMembros'

export default props => {
  return (
    <span>
      <FamiliaMembro nome="Jamie"/>
      <FamiliaMembro nome="Claire"/>
      <FamiliaMembro nome="Brianna"/>
    </span>
  )
}