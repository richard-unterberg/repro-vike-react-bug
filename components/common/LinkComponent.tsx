import { ReactNode, useMemo } from 'react'
import { usePageContext } from 'vike-react/usePageContext'

interface LinkComponentProps {
  href: string
  label?: string
  children?: ReactNode | ReactNode[]
  className?: string
  button?: boolean
}

const LinkComponent = ({ href, children, label, className = '', button }: LinkComponentProps) => {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext

  // clean up href and pathname
  const hrefWithoutSlashes = href.replace(/^\/|\/$/g, '')
  const pathnameWithoutSlashes = urlPathname.replace(/^\/|\/$/g, '')

  const isExternal = useMemo(() => {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return true
    }

    return false
  }, [href])

  const isActive = useMemo(
    () =>
      hrefWithoutSlashes === ''
        ? pathnameWithoutSlashes === hrefWithoutSlashes
        : pathnameWithoutSlashes.startsWith(hrefWithoutSlashes),
    [hrefWithoutSlashes, pathnameWithoutSlashes],
  )

  const generatedClassName = useMemo(() => {
    const staticClassName = 'inline-block hover:underline hover:text-primary'

    if (button) {
      return `${
        isActive ? 'bg-primary pointer-events-none' : 'bg-primary bg-opacity-50 hover:bg-opacity-75'
      } p-3 ${className} ${staticClassName} `
    }

    if (isExternal) {
      return ` @dark-text-primary '} ${className} ${staticClassName}`
    }

    return `${isActive ? '@dark-text-primary underline pointer-events-none' : '@dark:text-light'} ${className} ${staticClassName}`
  }, [button, className, isActive, isExternal])

  return (
    <a
      href={href}
      className={generatedClassName}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noreferrer' : ''}
      aria-label={label || ''}
    >
      {children}
    </a>
  )
}

export default LinkComponent
