import React from "react";

export default function SignIn() {
    return (
        <main className="container mx-auto">
            <h1>Sign In</h1>
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

            {/* image */}

            <form action="" method="">
                <div className="email">
                    <input type="email" name="" id="" />
                </div>
                <div className="password">
                    <input type="password" name="" id="" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>
            </form>
        </main>
    );
}
