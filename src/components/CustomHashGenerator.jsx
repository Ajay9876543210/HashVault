
import { useState } from "react";
import { Copy, Fingerprint, RefreshCw } from "lucide-react";
import { generateCustomHash } from "../utils/customHash";

function CustomHashGenerator() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!input.trim()) {
      setHash("");
      return;
    }

    const generatedHash = generateCustomHash(input);
    setHash(generatedHash);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!hash) return;

    try {
      await navigator.clipboard.writeText(hash);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="custom-hash-card">
      <div className="hash-heading">
        <Fingerprint size={24} />
        <div>
          <h2>Custom Hash Generator</h2>
          <p>SecureCheck Experimental Hash Technique</p>
        </div>
      </div>

      <label htmlFor="hash-input">Enter Your Text</label>

      <input
        id="hash-input"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setHash("");
          setCopied(false);
        }}
        placeholder="Enter any text or password..."
      />

      <button
        className="generate-hash-btn"
        onClick={handleGenerate}
        disabled={!input.trim()}
      >
        <RefreshCw size={18} />
        Generate Hash
      </button>

      {hash && (
        <div className="hash-result">
          <p>Generated 9-Character Hash</p>

          <div className="hash-output">
            <strong>{hash}</strong>

            <button onClick={handleCopy} title="Copy Hash">
              <Copy size={18} />
            </button>
          </div>

          <span>{copied ? "Hash copied!" : "Hash generated successfully"}</span>
        </div>
      )}

      <p className="hash-privacy">
        Your input is processed locally in your browser.
      </p>
    </section>
  );
}

export default CustomHashGenerator;
