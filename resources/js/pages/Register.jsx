import React from "react";
import InputComponent from "../components/InputComponent";
import { Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        birthdate: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function submit(e) {
        e.preventDefault();

        post("/register");
    }

    return (
        <main className="container mx-auto">
            <form className="w-1/3 mx-auto" onSubmit={submit}>
                <div className="text-center">
                    <span className="logo font-bold text-primary header-4">
                        smore
                    </span>
                    <h1 className="header-3">Create an account</h1>
                    <p>It's always free</p>
                </div>

                <InputComponent
                    type="text"
                    placeholder="Full Name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    error={errors.name}
                />
                <InputComponent
                    type="date"
                    placeholder="Birthdate"
                    value={data.birthdate}
                    onChange={(e) => setData("birthdate", e.target.value)}
                    error={errors.birthdate}
                />
                <InputComponent
                    type="text"
                    placeholder="Username"
                    value={data.username}
                    onChange={(e) => setData("username", e.target.value)}
                    error={errors.username}
                />
                <InputComponent
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    error={errors.email}
                />
                <InputComponent
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    error={errors.password}
                />
                <InputComponent
                    type="password"
                    placeholder="Repeat Password"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    error={errors.password_confirmation}
                />

                <p>
                    Already have an account? Please&nbsp;
                    <Link href="/signin" className="text-primary font-semibold">
                        Sign In
                    </Link>
                </p>
                <button
                    className="btn btn-primary shadow-primary shadow-2xl w-full"
                    disabled={processing}
                >
                    Register
                </button>
            </form>
        </main>
    );
}
