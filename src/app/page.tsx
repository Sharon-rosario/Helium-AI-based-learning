//@refresh
import HomeMain from "@/components/home/HomeMain";
import Wrapper from "@/layout/DefaultWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

const  Home = () => {
  return (
    <>
     <SpeedInsights/>
      <Wrapper>
        <main>
          <HomeMain/>
        </main>
      </Wrapper>
    </>
  );
}

export default Home