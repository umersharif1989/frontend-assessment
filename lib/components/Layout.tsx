import React, { ReactNode } from "react";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link href="/" className="navbar-brand">Assessment</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/profile" className="nav-link">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="container pt-3">{children}</main>

            <footer className="bg-light text-center py-3 mt-4 bg-dark fixed-bottom">
                <div className="container text-white">© {new Date().getFullYear()} Profile App</div>
            </footer>
        </>
    );
};

export default Layout;
