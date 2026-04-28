import "./ValueProp.css";
import { MessageCircleQuestionMark } from "lucide-react";
import Button from "../ui/Button";

function ValueProp() {
    return (
        <section className="value-prop">
            <div className="value-prop__inner">
                {/* left */}
                <h2 className="value-prop__title">
                    A platform that reads cognitive state from{" "}
                    <span className="value-prop__highlight">EEG hardware</span>
                    <sup>
                        {" "}
                        <MessageCircleQuestionMark width={16} />
                    </sup>{" "}
                    and alerts supervisors before performance fails
                </h2>
            </div>
            <div className="value-prop__cta-group">
                {/* scroll down to How it works */}
                <Button size="xl">Learn how it work</Button>
            </div>
        </section>
    );
}

export default ValueProp;
