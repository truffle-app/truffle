// express.d.ts
import { Response as ElysiaResponse } from 'elysia'

interface CustomResponse extends ElysiaResponse {
  statusCode?: number
}

export { CustomResponse }
