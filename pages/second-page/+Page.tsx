import BlurDot from '#components/common/BlurDot'
import H1Headline from '#components/common/H1Headline'
import LayoutComponent from '#components/common/LayoutComponent'

const SecondPage = () => (
  <LayoutComponent className="relative z-1 mt-10">
    <BlurDot
      className=" w-100 h-100 absolute -top-10 -right-20 @dark:opacity-10 opacity-30"
      pulse
    />
    <H1Headline>Second Page</H1Headline>
  </LayoutComponent>
)

export default SecondPage
