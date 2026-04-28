import "./ValueProp.css";
import { MessageCircleQuestionMark } from "lucide-react";
import Button from "../ui/Button";
import { Check } from "lucide-react";

const checkItems = [
    "Reads cognitive state in under 200ms",
    "A.I Analyze in real time",
    "Alerts supervisors before performance degrades.",
];
function ValueProp() {
    return (
        <section className="value-prop">
            <div className="value-prop__inner">
                {/* left */}
                <div className="value-prop__copy">
                    <h2 className="value-prop__title heading-1">
                        A platform that reads cognitive state from{" "}
                        <span className="eeg-tooltip-wrapper">
                            <span className="value-prop__highlight">
                                EEG hardware
                            </span>
                            <sup>
                                {" "}
                                <MessageCircleQuestionMark
                                    width={16}
                                    className="help-icon"
                                />
                            </sup>{" "}
                            <span className="eeg-tooltip text-sm-regular">
                                EEG (electroencephalography) — a non-invasive
                                headset that reads electrical activity in the
                                brain.
                            </span>
                        </span>
                        and alerts supervisors before performance fails
                    </h2>

                    <div className="value-prop__cta-group">
                        {/* scroll down to How it works */}
                        <Button size="xl">Learn how it works</Button>
                        <ul className="value-prop__checklist">
                            {checkItems.map((item) => (
                                <li
                                    key={item}
                                    className="value-prop__check-item">
                                    <Check width={16} className="help-icon " />
                                    <span className="text-base-regular">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Image */}
                <div className="value-prop__visual">
                    <img
                        src="https://res.cloudinary.com/dp90xtgcp/image/upload/v1777371157/ValueProp_yohbds.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}

export default ValueProp;
