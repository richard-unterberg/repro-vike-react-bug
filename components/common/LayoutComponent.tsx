import { useMemo } from 'react'

interface LayoutComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'full' | 'normal' | 'small' | 'normalWithoutGutter'
}

const LayoutComponent = ({ children, className, type, ...props }: LayoutComponentProps) => {
  const typeClass = useMemo(() => {
    switch (type) {
      case 'full':
        return 'w-full'
      case 'small':
        return 'max-w-3xl px-3'
      case 'normalWithoutGutter':
        return 'max-w-5xl px-0'
      default:
        return 'max-w-5xl px-3'
    }
  }, [type])

  return (
    <div className={`m-auto relative ${className} ${typeClass}`} {...props}>
      {children}
    </div>
  )
}

export default LayoutComponent
