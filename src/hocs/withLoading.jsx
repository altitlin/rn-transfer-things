import React from 'react'

import { Loader } from '../components/common'

export const withLoading = WrappedComponent => ({ isLoading, ...props }) => (
  isLoading ? <Loader /> : <WrappedComponent {...props} />
)
