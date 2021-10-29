import viteConfig from '../../../web/vite.config'
import { startDevServer } from '@cypress/vite-dev-server'

module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    return startDevServer({
      options,
      //@ts-ignore
      viteConfig
    })
  })

  return config
}