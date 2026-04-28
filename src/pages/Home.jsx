import HomeHero from "../components/sections/HomeHero";
import HomeTrustpartner from "../components/sections/HomeTrustPartner";
import ValueProp from "../components/sections/ValueProp";
import Sectors from "../components/sections/Sectors";
function Home() {
    return (
        <main>
            <HomeHero></HomeHero>
            <HomeTrustpartner />
            <ValueProp />
            <Sectors />
        </main>
    );
}

export default Home;
