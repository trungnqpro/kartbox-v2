import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const data = {
    msg: 'Ping 1',
  }

  const json = JSON.stringify(data)
  return data
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  // res.setHeader('Content-length', 'application/json')
  res.end(json)
}
