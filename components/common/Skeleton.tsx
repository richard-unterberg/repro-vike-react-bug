import { HTMLAttributes } from 'react'

const Skeleton = ({ ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={`${props.className} bg-light @dark:bg-grayDark animate-pulse rounded`}
  />
)

export default Skeleton
