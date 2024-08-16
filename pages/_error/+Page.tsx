import { usePageContext } from 'vike-react/usePageContext'

import H1Headline from '#components/common/H1Headline'
import H2Headline from '#components/common/H2Headline'
import Menu from '#components/Menu'

const ErrorPage = () => {
  const { abortReason, is404 } = usePageContext()

  return (
    <>
      {is404 ? (
        <>
          <H1Headline className="text-xl mb-4">404 Page Not Found</H1Headline>
          <H2Headline>This page could not be found.</H2Headline>
        </>
      ) : (
        <>
          <H1Headline className="text-xl mb-4">500 Internal Server Error</H1Headline>
          <H2Headline>{`"${abortReason}"`}</H2Headline>
        </>
      )}
      <Menu />
    </>
  )
}

export default ErrorPage
