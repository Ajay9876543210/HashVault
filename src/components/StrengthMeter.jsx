
function StrengthMeter({ analysis }) {
  const { score, strength, color } = analysis;

  const percentage = score === 0
    ? 5
    : ((score + 1) / 5) * 100;

  return (
    <div className="strength-section">

      <div className="strength-header">
        <span>Password Strength</span>

        <strong style={{ color }}>
          {strength}
        </strong>
      </div>

      <div className="strength-bar">
        <div
          className="strength-progress"
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>

      <div className="strength-footer">
        <span>Security Score</span>
        <strong>{score}/4</strong>
      </div>

    </div>
  );
}

export default StrengthMeter;
