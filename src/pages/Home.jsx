import HomeHero from "../components/sections/HomeHero";
import HomeTrustpartner from "../components/sections/HomeTrustPartner";
import ValueProp from "../components/sections/ValueProp";
import Sectors from "../components/sections/Sectors";
import HowItWorks from "../components/sections/HowItWorks";
function Home() {
    return (
        <main>
            <HomeHero></HomeHero>
            <HomeTrustpartner />
            <ValueProp />
            <Sectors />
            <HowItWorks />
        </main>
    );
}

export default Home;
