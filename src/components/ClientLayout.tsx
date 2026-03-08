"use client";

import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    const handleComplete = useCallback(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {loading && <Preloader onComplete={handleComplete} />}
            {children}
        </>
    );
}
