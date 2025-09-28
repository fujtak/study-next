const fetcher = async(endpoint: RequestInfo, option?: RequestInit): Promise<Response> => {
  const response = await fetch(endpoint, option)
  if(!response.ok) {
    const data = await response.json()
    throw new Error(data.message ?? 'API response error')
  }
  return response.json()
}

export default fetcher