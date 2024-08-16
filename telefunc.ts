import { Request, Response, Router } from 'express'
import { telefunc } from 'telefunc'

const router = Router()

router.post('/_telefunc', async (req: Request, res: Response) => {
  // here you can add your own context
  const context = {
    accessGranted: true,
  }
  const httpResponse = await telefunc({
    url: req.originalUrl,
    method: req.method,
    body: req.body,
    context,
  })
  const { body, statusCode, contentType } = httpResponse
  res.status(statusCode).type(contentType).send(body)
})

export default router
