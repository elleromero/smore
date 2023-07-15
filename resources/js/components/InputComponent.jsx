import React from "react";

export default function InputComponent({ icon: Icon, ...props }) {
    return (
        <div className="bg-slate-200 relative p-3 my-5 rounded-md">
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
    );
}
