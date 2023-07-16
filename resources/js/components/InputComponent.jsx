import React from "react";

export default function InputComponent({ icon: Icon, error, ...props }) {
    return (
        <div className="my-4">
            <div
                className={`bg-slate-200 relative p-3 rounded-md ${
                    error && "border-red-400 border-2"
                }`}
            >
                {Icon && (
                    <Icon className="absolute bottom-1/2 right-3 translate-y-1/2 text-gray-500" />
                )}
                <input
                    {...props}
                    className={`bg-transparent outline-none w-full ${
                        Icon && "pr-8"
                    }`}
                />
            </div>
            {error && (
                <span className="text-red-400 font-semibold mt-2 inline-block">
                    {error}
                </span>
            )}
        </div>
    );
}
