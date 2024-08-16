import { APP_CONFIG } from '#lib/config'

const Head = () => (
  <>
    <link rel="manifest" href={`${APP_CONFIG.viteUrl}/site.webmanifest`} />
    <link rel="icon" href={`${APP_CONFIG.viteUrl}/favicon.ico`} />
  </>
)

export { Head }
