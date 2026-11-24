
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import CustomHashGenerator from "./components/CustomHashGenerator";

import Header from "./components/Header";
import PasswordInput from "./components/PasswordInput";
import StrengthMeter from "./components/StrengthMeter";
import SecurityChecklist from "./components/SecurityChecklist";
import Suggestions from "./components/Suggestions";

import { analyzePassword } from "./utils/passwordAnalyzer";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  const analysis = analyzePassword(password);

  return (
    <div className="dashboard">

      <Header />

      <main className="main-content">

        <section className="hero-section">
          <span className="eyebrow">
            PASSWORD SECURITY ANALYSIS
          </span>

          <h1>
            Create a Stronger
            <span> Digital Identity.</span>
          </h1>

          <p>
            Analyze your password strength and discover
            how to improve your online security.
          </p>
        </section>

        <section className="analyzer-card">

          <div className="card-heading">
            <h2>Password Analyzer</h2>
            <span>LIVE ANALYSIS</span>
          </div>

          <PasswordInput
            password={password}
            setPassword={setPassword}
          />

          {password ? (
            <div className="results-section">

              <StrengthMeter analysis={analysis} />

              <SecurityChecklist
                checks={analysis.checks}
              />

              <Suggestions analysis={analysis} />

            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <ShieldCheck size={35} />
              </div>

              <h3>Ready to Analyze?</h3>

              <p>
                Enter a password above to see its
                security analysis.
              </p>
            </div>
          )}

        </section>
        <CustomHashGenerator />

        <footer>
          <ShieldCheck size={15} />
          <span>
            Your password stays in your browser.
            We do not store or transmit it.
          </span>
        </footer>

      </main>

    </div>
  );
}

export default App;
