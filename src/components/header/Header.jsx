import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${scrollPosition ? "shadow" : ""} sticky top-0 z-40 left-0`}
    >
      <TopNav scrollPosition={scrollPosition} />
      <Navbar />
    </nav>
  );
}

export default Header;
