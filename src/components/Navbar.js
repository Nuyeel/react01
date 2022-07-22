import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext, { themes } from "./ThemeContext";
import AuthContext from "./AuthContext";

export default function Navbar() {
    const { name, bgc, fc, setTheme } = useContext(ThemeContext);
    const { authorized, account } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#/">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        {Object.keys(themes).map((n) => {
                            return (
                                <li className="nav-item" key={n}>
                                    <button
                                        className="btn"
                                        onClick={() => setTheme(themes[n])}
                                    >
                                        {n + (n === name ? " v" : "")}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {authorized ? (
                            <li className="nav-item">{account}</li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    登入
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
