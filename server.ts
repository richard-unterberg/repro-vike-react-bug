/* eslint-disable no-console */
import bodyParser from 'body-parser'
import express from 'express'

import 'dotenv/config'

import { createHandler } from '@universal-middleware/express'
import compression from 'compression'

import telefuncRoute from '#server/telefunc'
import { vikeHandler } from '#server/vike'

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? 5247 : 4248
const currentEnvUrl = `http://localhost:${port}`
const hmrPort = process.env.HMR_PORT ? parseInt(process.env.HMR_PORT, 10) : 24678

async function getRoot() {
  const { dirname } = await import('path')
  const { fileURLToPath } = await import('url')
  const dn = dirname(fileURLToPath(import.meta.url))
  const root = dn
  return root
}

async function startServer() {
  // Initialize client.
  const app = express()

  app.use(compression())
  app.use(express.text())
  app.use(bodyParser.json())

  const root = await getRoot()

  if (isProduction) {
    app.use(express.static(`${root}/dist/client`))
  } else {
    // Instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We should instantiate it *only* in development. (It isn't needed in production
    // and would unnecessarily bloat our server in production.)
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true, hmr: { port: hmrPort } },
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }

  /**
   * Telefunc route
   * @link {@see https://telefunc.com}
   */
  app.post('/_telefunc', telefuncRoute)

  /**
   * Vike route
   * @link {@see https://vike.dev}
   */
  app.all('*', createHandler(vikeHandler))

  app.listen(port)
  console.log(`Server running at ${currentEnvUrl}`)

  return app
}

export default (await startServer()) as unknown
