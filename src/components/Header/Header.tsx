import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">NetFlex</a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/movies" className="nav-link">Movies</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/watch_list" className="nav-link">WatchList</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-warning btn-sm mt-1">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}