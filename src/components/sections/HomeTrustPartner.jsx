import { div } from "three/tsl";
import "./HomeTrustpartner.css";

/* Partner logo - Get url from cloudinary */
const logos = [
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324299/itech_hkrljx.png",
        alt: "ICtech",
    },
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324299/safer_ad5kig.png",
        alt: "SAFER",
    },
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324300/viti_ngl2jp.png",
        alt: "VTI",
    },
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324298/einride_uz1lyn.png",
        alt: "Einride",
    },
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324298/drivesweden_u5j92l.png",
        alt: "Drive Sweden",
    },
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324298/idun_wb1rkz.png",
        alt: "IOUN Technologies",
    },
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324298/brainmark_vshabz.png",
        alt: "Brainmark",
    },
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324300/bitbrain_vd69vs.png",
        alt: "Bitbrain",
    },
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324299/usability_f9iq5b.png",
        alt: "Usability Partners",
    },
    {
        src: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777324299/teleoperation_mnklvl.png",
        alt: "Teleoperation Consortium",
    },
];

function HomeTrustpartner() {
    return (
        <section className="trust">
            <div className="trust__inner">
                {/* Label Row */}
                <div className="trust__label-row">
                    <div className="trust__label text-lg-bold">
                        TRUSTED WITH THE BEST
                    </div>
                </div>

                {/* logo grid */}
                <div className="trust__grid">
                    {logos.map((logo) => (
                        <div key={logo.alt} className="trust__cell">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="trust__logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeTrustpartner;
