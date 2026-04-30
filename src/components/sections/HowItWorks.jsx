import './HowItWorks.css'

/* Step images — save locally before deadline */
const steps = [
    {
        number: 1,
        title: 'Equip',
        description: 'Fit a lightweight EEG headset before any session — simulation, training, or live operations.',
        img: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777445020/Equip_xsotij.png',
    },
    {
        number: 2,
        title: 'Stream',
        description: 'The moment a session begins, raw EEG data flows continuously to the InnoBrain dashboard in real time.',
        img: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777445019/Stream_zit174.png',
        alt:'Stream InnoBrain',
    },
    {
        number: 3,
        title: 'Analyse',
        description: "InnoBrain's AI translates brainwave data into readable metrics — cognitive load, stress, vigilance and fatigue.",
        img: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777445022/Analyze_baagzi.png',
    },
    {
        number: 4,
        title: 'Act',
        description: 'When a threshold is crossed, supervisors receive an immediate alert and a structured post-session report.',
        img: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777445021/Act_sfhjyu.png',
    },
]

function HowItWorks() {
    return (
        <section className="hiw">
            <div className="hiw__inner">

                {/* Label bar */}
                <div className="hiw__label-bar">
                    <span className="hiw__label">FROM SIGNAL TO DECISIONS IN MINUTES</span>
                    <span className="hiw__label">/ CLOUD-BASED</span>
                </div>

                {/* Heading */}
                <div className="hiw__heading">
                    <h2 className="hiw__title">How InnoBrain works?</h2>
                    <p className="hiw__subtitle">
                        A lightweight EEG headset, a live dashboard, and a clear action — that's the entire loop from data to decision.
                    </p>
                </div>

                {/* Stripe | Steps | Stripe */}
                <div className="hiw__grid-wrapper">

                    <div className="hiw__stripe" aria-hidden="true" />

                    {/* Step rows */}
                    <div className="hiw__steps">
                        {steps.map((step) => (
                            <div key={step.number} className="hiw__row">

                                {/* Left — text panel */}
                                <div className="hiw__text-panel">

                                    {/* Vertical timeline line + numbered badge */}
                                    <div className="hiw__timeline">
                                        <div className="hiw__timeline-line hiw__timeline-line--top" />
                                        <div className="hiw__badge">{step.number}</div>
                                        <div className="hiw__timeline-line hiw__timeline-line--bottom" />
                                    </div>

                                    {/* Content */}
                                    <div className="hiw__content">
                                        <span className="hiw__step-label">STEP</span>
                                        <div className="hiw__copy">
                                            <h3 className="hiw__step-title">{step.title}</h3>
                                            <p className="hiw__step-desc">{step.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right — illustration */}
                                <div className="hiw__image-panel">
                                    <img src={step.img} alt={step.title} />
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Right stripe */}
                    <div className="hiw__stripe" aria-hidden="true" />

                </div>

            </div>
        </section>
    )
}

export default HowItWorks
