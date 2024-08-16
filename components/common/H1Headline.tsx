export const h1TwConfig = 'text-3xl md:text-4xl font-bold'

interface H1HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1Headline = ({ children, className, ...props }: H1HeadlineProps) => (
  <h1 className={`${className ?? ''} ${h1TwConfig}`} {...props}>
    {children}
  </h1>
)

export default H1Headline
