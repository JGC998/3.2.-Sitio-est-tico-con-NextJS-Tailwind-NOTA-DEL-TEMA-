'use client'
import { useEffect, useState } from "react";


function Page2() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const i1 = setInterval(() => {
            setHora(new Date());
            document.title = "Misión: " + new Date().toLocaleTimeString();
        }, 1000);


        return () => clearInterval(i1);
    }, []);

    return (
        <div className="p-8 text-center bg-base-300 min-h-[80vh]">
            <h2 className="text-4xl font-bold mb-8 text-primary">Reloj de Misión (Zulu Time)</h2>
            <div className="mockup-code w-full md:w-2/3 mx-auto">
                <pre data-prefix="T+0">
                    <code className="text-9xl font-mono text-success">
                        {hora.toLocaleTimeString('en-US', { hour12: false })}
                    </code>
                </pre>
                <pre data-prefix="UTC">
                    <code className="text-3xl">
                         {hora.toUTCString()}
                    </code>
                </pre>
            </div>
            <p className="mt-8 text-lg">Monitoreando el tiempo real de la misión.</p>
        </div>
    );
}

export default Page2;
