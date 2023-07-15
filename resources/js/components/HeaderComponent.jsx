import React from "react";

export default function HeaderComponent() {
    return (
        <header className="px-6">
            <div className="container mx-auto flex items-center">
                <span className="logo text-primary font-bold lowercase">
                    Smore
                </span>

                <nav className="mx-10 [&>*]:mx-4">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact Us</a>
                </nav>

                <div className="nav-right ml-auto">
                    <button className="btn btn-link mx-5">Sign In</button>
                    <button className="btn-pill btn-opposite">Register</button>
                </div>
            </div>
        </header>
    );
}
