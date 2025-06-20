import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar bg-secondary mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Bool Movies</Link>
            </div>
        </nav>
    )
}

export default Header