import BlurDot from '#components/common/BlurDot'
import H1Headline from '#components/common/H1Headline'
import LayoutComponent from '#components/common/LayoutComponent'
import PageAnimationContainer from '#components/common/PageAnimationContainer'
import Lorem from '#components/Lorem'

const StartPage = () => (
  <PageAnimationContainer>
    <LayoutComponent type="normalWithoutGutter">
      <BlurDot className="w-150 h-150 absolute -top-100 -left-50 opacity-10" pulse />
      <BlurDot className="w-100 h-100 absolute -bottom-30 -right-30 opacity-10" pulse />
      <div className="relative z-0 mt-24 mb-24 flex flex-col items-center">
        <H1Headline className="text-center mb-2">A start page</H1Headline>
      </div>
      <Lorem />
    </LayoutComponent>
  </PageAnimationContainer>
)

export default StartPage
