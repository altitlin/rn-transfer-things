import { useState } from 'react'

import { instance } from '../config/axios'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = async (url, method = 'GET', data) => {
    setLoading(prev => !prev)

    try {
      const response = await instance[method.toLocaleLowerCase()](
        url,
        { ...data }
      )

      setLoading(prev => !prev)

      return response.data
    } catch (error) {
      setLoading(prev => !prev)
      setError(error.message)
      throw error
    }
  }

  return {
    loading,
    error,
    request,
  }
}
