import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TopNav from './TopNav';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky left-0 top-0 z-40 shadow">
      <TopNav scrollPosition={scrollPosition} />
      <Navbar />
    </header>
  );
}

export default Header;
