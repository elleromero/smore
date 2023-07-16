import React from "react";
import InputComponent from "../components/InputComponent";
import { Key, Mail } from "react-feather";
import { Link, useForm } from "@inertiajs/react";

export default function SignIn() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/signin");
    }

    return (
        <main className="container mx-auto grid grid-cols-3 gap-x-9">
            <section className="left self-center relative">
                <h1 className="header-1">Sign In</h1>
                <p>
                    Ignite Your Project Management Success! Seamlessly
                    orchestrate your projects with Smore, the ultimate platform
                    designed to simplify collaboration, streamline tasks, and
                    empower your team's productivity.
                </p>
                <p className="mt-3">
                    If you don't have an account you can &nbsp;
                    <Link
                        href="/register"
                        className="text-primary font-semibold"
                    >
                        Register here
                    </Link>
                </p>

                <div className="blur-gradient"></div>
            </section>

            <div>
                <img src="/assets/svg/gummy-work-from-home.svg" alt="image" />
            </div>

            <form onSubmit={submit} className="self-center">
                <InputComponent
                    type="text"
                    placeholder="Email"
                    name="email"
                    icon={Mail}
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />

                <InputComponent
                    type="password"
                    placeholder="Password"
                    name="password"
                    icon={Key}
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                />

                <div className="text-right">
                    <a href="" className="text-gray-500">
                        Forgot Password
                    </a>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary shadow-primary shadow-2xl w-full mt-10"
                    disabled={processing}
                >
                    Sign In
                </button>
            </form>
        </main>
    );
}
