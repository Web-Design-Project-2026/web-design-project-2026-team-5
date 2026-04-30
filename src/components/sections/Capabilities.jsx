import "./Capabilities.css";

function Capabilities() {
    return (
        <section className="capabilities">
            <div className="capabilities__inner">
                {/* Label bar */}
                <div className="capabilities__label-bar">
                    <span className="capabilities__label">
                        TURN DATA INTO DECISION
                    </span>
                    <span className="capabilities__label">/ SEE DEEPER</span>
                </div>

                <div className="capabilities__container">
                    {/*sticky heading */}
                    <div className="capabilities__sticky">
                        <h2 className="capabilities__title">
                            Platform Capabilities
                        </h2>
                        <p className="capabilities__subtitle">
                            Everything you need to monitor, understand and act
                            on cognitive performance
                        </p>
                    </div>

                    {/* Right cards */}
                    <div className="capabilities__right"></div>
                </div>
            </div>
        </section>
    );
}

export default Capabilities;
