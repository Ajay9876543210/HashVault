
import { Lightbulb, AlertTriangle } from "lucide-react";

function Suggestions({ analysis }) {
  const suggestions = analysis.suggestions || [];
  const warning = analysis.warning;

  const hasSuggestions = suggestions.length > 0 || warning;

  return (
    <div className="suggestions-section">

      <div className="suggestions-heading">
        <Lightbulb size={21} color="#facc15" />
        <h3>Security Recommendations</h3>
      </div>

      {warning && (
        <div className="warning-message">
          <AlertTriangle size={17} />
          <span>{warning}</span>
        </div>
      )}

      {hasSuggestions ? (
        <ul>
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="no-suggestions">
          No additional suggestions from the password estimator.
        </p>
      )}

    </div>
  );
}

export default Suggestions;
