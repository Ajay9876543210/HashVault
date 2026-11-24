
import zxcvbn from "zxcvbn";

export function analyzePassword(password) {
  if (!password) {
    return {
      score: 0,
      strength: "No Password",
      color: "#64748b",
      checks: [],
      suggestions: [],
      warning: ""
    };
  }

  const result = zxcvbn(password);

  // Mandatory security requirements
  const checks = [
    {
      label: "At least 8 characters",
      passed: password.length >= 8,
      required: true
    },
    {
      label: "At least 12 characters",
      passed: password.length >= 12,
      required: false
    },
    {
      label: "Uppercase letter (A-Z)",
      passed: /[A-Z]/.test(password),
      required: true
    },
    {
      label: "Lowercase letter (a-z)",
      passed: /[a-z]/.test(password),
      required: true
    },
    {
      label: "Number (0-9)",
      passed: /[0-9]/.test(password),
      required: true
    },
    {
      label: "Special character (@#$!)",
      passed: /[^A-Za-z0-9]/.test(password),
      required: true
    }
  ];

  // Check all mandatory conditions
  const allRequiredPassed = checks
    .filter(item => item.required)
    .every(item => item.passed);

  // Calculate final score
  let finalScore = 0;

  if (allRequiredPassed) {
    finalScore = result.score;
  } else {
    finalScore = Math.min(result.score, 2);
  }

  const strengthLevels = [
    { label: "Very Weak", color: "#ef4444" },
    { label: "Weak", color: "#f97316" },
    { label: "Fair", color: "#eab308" },
    { label: "Strong", color: "#22c55e" },
    { label: "Very Strong", color: "#10b981" }
  ];

  const level = strengthLevels[finalScore];

  return {
    score: finalScore,
    strength: level.label,
    color: level.color,
    checks,
    suggestions: result.feedback.suggestions,
    warning: result.feedback.warning,
    allRequiredPassed
  };
}
