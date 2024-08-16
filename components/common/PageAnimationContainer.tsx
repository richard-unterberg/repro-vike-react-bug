export const pageAnimationConfig = `

  motion-safe:animate-in
  motion-safe:animate-duration-400
  motion-safe:animate-ease-out
  motion-safe:fade-in-25
`

interface PageAnimationContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageAnimationContainer = ({ children, className, ...props }: PageAnimationContainerProps) => (
  <div className={`${className || ''} ${pageAnimationConfig}`} {...props}>
    {children}
  </div>
)

export default PageAnimationContainer
