import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-theme", !dark);
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;