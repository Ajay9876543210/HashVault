
import { ShieldCheck, LockKeyhole } from "lucide-react";

function Header() {
  return (
    <header className="main-header">
      <div className="brand">
        <div className="brand-icon">
          <ShieldCheck size={25} />
        </div>

        <div>
          <h2>SecureCheck</h2>
          <span>Password Security Tool</span>
        </div>
      </div>

      <div className="header-status">
        <LockKeyhole size={15} />
        <span>100% Browser Based</span>
      </div>
    </header>
  );
}

export default Header;
