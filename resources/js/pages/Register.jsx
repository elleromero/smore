import React from "react";
import InputComponent from "../components/InputComponent";
import { Link } from "@inertiajs/react";

export default function Register() {
    return (
        <main className="container mx-auto">
            <form action="" method="" className="w-1/3 mx-auto">
                <div className="text-center">
                    <span className="logo font-bold text-primary header-4">
                        smore
                    </span>
                    <h1 className="header-3">Create an account</h1>
                    <p>It's always free</p>
                </div>

                <InputComponent type="text" placeholder="Full Name" />
                <InputComponent type="date" placeholder="Birthdate" />
                <InputComponent type="text" placeholder="Username" />
                <InputComponent type="email" placeholder="Email" />
                <InputComponent type="password" placeholder="Password" />
                <InputComponent type="password" placeholder="Repeat Password" />

                <p>
                    Already have an account? Please&nbsp;
                    <Link href="/signin" className="text-primary font-semibold">
                        Sign In
                    </Link>
                </p>
                <button className="btn btn-primary shadow-primary shadow-2xl w-full">
                    Register
                </button>
            </form>
        </main>
    );
}
