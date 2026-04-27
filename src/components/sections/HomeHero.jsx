import "./HomeHero.css";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import LiquidEther from "../effects/LiquidEther";

function HomeHero() {
    return (
        <section className="hero">
            <div className="hero__inner">
                <div className="hero__bg">
                    <LiquidEther
                        colors={["#E7C1FF", "#E7C1FF", "#3B82F6"]}
                        mouseForce={20}
                        cursorSize={100}
                        isViscous
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        resolution={0.3}
                        isBounce={false}
                        autoDemo
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                        color0="#93C5FD"
                        color1="#93C5FD"
                        color2="#5227FF"
                    />
                </div>
                <div className="hero__content">
                    {/* tag pill */}
                    <div className="hero__tag">
                        <Activity
                            width={12}
                            strokeWidth={3}
                            color="var(--brand-primary)"
                        />
                        <span className="text-sm-regular">
                            Cognitive Performance Platform
                        </span>
                    </div>
                    {/* Headline + Subtext */}
                    <div className="hero__copy">
                        <h1 className="hero__title">
                            Know when your team <br />
                            hits limit before they do
                        </h1>
                        <div className="hero__subtitle text-base-regular">
                            Real-time EEG monitoring that turns cognitive load
                            into
                            <br />
                            actionable data for defence, aviation and logistics.
                        </div>
                    </div>

                    <div className="hero__actions">
                        <Link to="/contact">
                            <Button
                                size="lg"
                                iconTrailing={
                                    <ArrowRight width={16}></ArrowRight>
                                }>
                                Book a Free Demo
                            </Button>
                        </Link>
                        <Link to="/platform">
                            <Button size="lg" variant="outline">
                                Watch overview
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Product Screenshot */}
                <div className="hero__product">
                    <img
                        src="https://res.cloudinary.com/dp90xtgcp/image/upload/v1777311654/ProductUI_bnzhu3.png"
                        alt="hero__dashboard"
                    />
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
