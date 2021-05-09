import React from 'react'

import { Loader } from '../components/common'

export const withLoading = WrappedComponent => ({ loading, ...props }) => (
  loading ? <Loader /> : <WrappedComponent {...props} />
)
