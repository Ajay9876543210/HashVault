
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

function PasswordInput({ password, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-input-section">

      <label htmlFor="password">
        Enter Your Password
      </label>

      <div className="password-input-wrapper">

        <LockKeyhole size={20} className="input-lock-icon" />

        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>

      <p className="input-hint">
        Your password is analyzed locally in your browser.
      </p>

    </div>
  );
}

export default PasswordInput;
