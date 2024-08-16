export const h2TwConfig = `
  text-2xl
  md:text-3xl
  font-light
`

const H2Headline = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={`${className ?? ''} ${h2TwConfig}`} {...props}>
    {children}
  </h1>
)
export default H2Headline
