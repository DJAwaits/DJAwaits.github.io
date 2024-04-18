import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Blog", path: "/blog"},
        
    ]
  return (
    <header>
        <nav>
            <div>
                {}
                <Link to="/">dylancute</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
