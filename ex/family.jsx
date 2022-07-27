import React from 'react'
import { childrenWithprops } from '../utils/reactUtils'

export default props => (
  <div>
    <h1>Família!</h1>
    {childrenWithprops(props.children, props)}


  </div>
)
