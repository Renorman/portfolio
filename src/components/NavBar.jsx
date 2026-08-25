import React from 'react'
import { navLinks } from "../constants/index.js"
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'


export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [])
  
    return (
    <header className = {`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className = "inner">
        <Link className="logo" to="#hero">
          <h4>Rory Norman</h4>
        </Link>

        <nav className="desktop">
            <ul>
                {navLinks.map(({link, name}) => (
                    <li key={name} className="group">
                        <Link to = {link}>
                            <span>{name}</span>
                            <span className = "underline"/>
                        </Link>

                    </li>
                ) )}
            </ul>
        </nav>
      </div>
    </header>
  )
}
