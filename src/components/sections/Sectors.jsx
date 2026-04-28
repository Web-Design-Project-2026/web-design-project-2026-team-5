import {
    CirclePile,
    Drone,
    PlaneTakeoff,
    Package,
    BrainCircuit,
    CircleUser,
} from "lucide-react";
import "./Sectors.css";

/* Sector background images — replace with your actual URLs */
const sectors = [
    {
        id: "mobility",
        icon: <CirclePile size={20} />,
        title: "Mobility",
        description:
            "Real-time operator-state metrics for early warnings and adaptive assistance validation.",
        img: "",
    },
    {
        id: "training",
        icon: <Drone size={20} />,
        title: "Training & Simulation",
        description:
            "Objective cognitive metrics to personalize training and verify effectiveness.",
        img: "",
    },
    {
        id: "aviation",
        icon: <PlaneTakeoff size={20} />,
        title: "Aviation",
        description:
            "Crew-state indicators for fatigue management, debriefing, and mission planning.",
        img: "",
    },
    {
        id: "manufacturing",
        icon: <Package size={20} />,
        title: "Manufacturing & Logistics",
        description:
            "Human-state analytics for staffing optimization and proactive safety.",
        img: "",
    },
    {
        id: "cognitive",
        icon: <BrainCircuit size={20} />,
        title: "Cognitive Augmentation",
        description:
            "Real-time cognitive technologies that enhance decision-making and attention (e.g., Esports).",
        img: "",
    },
    {
        id: "human",
        icon: <CircleUser size={20} />,
        title: "HMI, Human Factors & User Research",
        description:
            "Objective human-state data to inform interface design and user behavior analysis.",
        img: "",
    },
];

function Sectors() {
    return (
        <section className="sectors">
            <div className="sectors__inner">
                {/* Top label bar */}
                <div className="sectors__label-bar">
                    <span className="sectors__label">POWERFUL PLATFORM</span>
                    <span className="sectors__label">/ DATA · BUSINESS</span>
                </div>

                {/* Heading */}
                <div className="sectors__heading">
                    <h2 className="sectors__title">Who is InnoBrain for?</h2>
                    <p className="sectors__subtitle">
                        We build for teams where human performance is
                        mission-critical.
                    </p>
                </div>

                {/* Grid row: stripe | cards | stripe */}
                <div className="sectors__grid-wrapper">
                    {/* Left decorative stripe column */}
                    <div className="sectors__stripe" aria-hidden="true" />

                    {/* Sector cards */}
                    <div className="sectors__grid">
                        {sectors.map((sector) => (
                            <div key={sector.id} className="sectors__card">
                                {/* Background image — fades in on hover */}
                                <div className="sectors__card-bg">
                                    <img src={sector.img} alt="" />
                                    <div className="sectors__card-overlay" />
                                </div>

                                {/* Icon */}
                                <div className="sectors__card-icon">
                                    {sector.icon}
                                </div>

                                {/* Text */}
                                <div className="sectors__card-text">
                                    <h3 className="sectors__card-title">
                                        {sector.title}
                                    </h3>
                                    <p className="sectors__card-desc">
                                        {sector.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right decorative stripe column */}
                    <div className="sectors__stripe" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}

export default Sectors;
