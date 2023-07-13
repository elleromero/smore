import React from "react";
import HeaderComponent from "../components/HeaderComponent";

export default function AppLayout({ children }) {
    return (
        <>
            <HeaderComponent />
            {children}
        </>
    );
}
