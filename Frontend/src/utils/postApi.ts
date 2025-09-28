import fetcher from "./fetcher"

const postApi = async(endpoint: RequestInfo, body: object): Promise<Response> => {
  return await fetcher(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export default postApi