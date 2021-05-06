import React from 'react'

import { Button } from '../components/common'

export const withButtonIcon = (WrappedComponent, options) => props => (
  <Button
    {...props}
  >
    <WrappedComponent {...options} />
  </Button>
)
