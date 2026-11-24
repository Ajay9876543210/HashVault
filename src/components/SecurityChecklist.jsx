
import { CheckCircle2, CircleX } from "lucide-react";

function SecurityChecklist({ checks }) {
  return (
    <div className="security-checklist">

      <h3>Security Requirements</h3>

      <div className="checklist-items">

        {checks.map((item, index) => (
          <div className="checklist-item" key={index}>

            {item.passed ? (
              <CheckCircle2
                size={19}
                color="#22c55e"
              />
            ) : (
              <CircleX
                size={19}
                color="#ef4444"
              />
            )}

            <span className={item.passed ? "passed" : "failed"}>
              {item.label}
            </span>

            <span className="check-status">
              {item.passed ? "Passed" : "Not Met"}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SecurityChecklist;
