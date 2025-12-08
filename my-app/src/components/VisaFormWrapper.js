"use client";

import dynamic from "next/dynamic";

const VisaForm = dynamic(() => import("./visaForm"), {
    ssr: false,   // ❗ Disable Server Side Rendering
});

export default function VisaFormWrapper() {
    return <VisaForm />;
}
