import { useEffect, useRef, useState } from 'react'

import { APP_CONFIG } from '#lib/config'

interface BlurDotProps extends React.HTMLAttributes<HTMLDivElement> {
  pulse?: boolean
}

const BlurDot = ({ pulse, ...props }: BlurDotProps) => {
  const dotRef = useRef<HTMLDivElement>(null)
  const [delayClass, setDelayClass] = useState<string>('')

  useEffect(() => {
    if (!pulse) return
    const delay = Math.floor(Math.random() * 10)
    const base = 'animate-in animate-pulse'

    switch (delay) {
      case 0:
        setDelayClass(`${base} animate-delay-250`)
        break
      case 1:
        setDelayClass(`${base} animate-delay-500`)
        break
      case 2:
        setDelayClass(`${base} animate-delay-750`)
        break
      case 3:
        setDelayClass(`${base} animate-delay-1000`)
        break
      case 4:
        setDelayClass(`${base} animate-delay-1250`)
        break
      case 5:
        setDelayClass(`${base} animate-delay-1500`)
        break
      case 6:
        setDelayClass(`${base} animate-delay-1750`)
        break
      case 7:
        setDelayClass(`${base} animate-delay-2000`)
        break
      case 8:
        setDelayClass(`${base} animate-delay-2250`)
        break
      case 9:
        setDelayClass(`${base} animate-delay-2500`)
        break
      default:
        setDelayClass(`${base} animate-delay-2750`)
    }
  }, [pulse])

  return (
    <div className={`${delayClass}`}>
      <div
        ref={dotRef}
        className={`${props.className ?? ''} absolute pointer-events-none z-0 `}
        style={{
          backgroundImage: `url(${APP_CONFIG.viteUrl}/decorators/dot/dot-orange.avif)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      />
    </div>
  )
}

export default BlurDot
