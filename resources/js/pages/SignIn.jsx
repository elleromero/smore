import React from "react";
import InputComponent from "../components/InputComponent";
import { EyeOff, Key, Mail } from "react-feather";

export default function SignIn() {
    return (
        <main className="container mx-auto flex justify-between">
            <section className="left">
                <h1 className="header-1">Sign In</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    ipsum ex mollitia, quidem repellendus dolorem velit eveniet
                    exercitationem odio numquam.
                </p>
                <p>
                    If you don't have an account you can &nbsp;
                    <a href="#" className="text-primary font-semibold">
                        Register here
                    </a>
                </p>
            </section>

            {/* image */}

            <form action="" method="">
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
