import React, { useEffect, useState } from 'react'
import { FaBlog } from "react-icons/fa6";
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
                <a href="/" className='text-2x1 font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block '/>Books</a>

                <ul>
                    {
                        
                    }
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
