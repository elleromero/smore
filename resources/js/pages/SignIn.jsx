import React from "react";
import InputComponent from "../components/InputComponent";
import { EyeOff, Key, Mail } from "react-feather";

export default function SignIn() {
    return (
        <main className="container mx-auto grid grid-cols-3 gap-x-9">
            <section className="left self-center">
                <h1 className="header-1">Sign In</h1>
                <p>
                    Ignite Your Project Management Success! Seamlessly
                    orchestrate your projects with Smore, the ultimate platform
                    designed to simplify collaboration, streamline tasks, and
                    empower your team's productivity.
                </p>
                <p className="mt-3">
                    If you don't have an account you can &nbsp;
                    <a href="#" className="text-primary font-semibold">
                        Register here
                    </a>
                </p>
            </section>

            <div>
                <img src="/assets/svg/gummy-work-from-home.svg" alt="image" />
            </div>

            <form action="" method="" className="self-center">
                <InputComponent
                    type="text"
                    placeholder="Email"
                    name="email"
                    icon={Mail}
                />

                <InputComponent
                    type="password"
                    placeholder="Password"
                    name="password"
                    icon={Key}
                />
                <button
                    type="submit"
                    className="btn btn-primary shadow-primary shadow-2xl w-full"
                >
                    Sign In
                </button>
            </form>
        </main>
    );
}
