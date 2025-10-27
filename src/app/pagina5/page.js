'use client'


import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function CarouselCard() {
    useEffect(() => {
        const slider = new Glide(".glide-06", {
            type: "carousel",
            focusAt: "center",
            perView: 3,
            autoplay: 3000, // Aumentado el tiempo para una mejor visualización
            animationDuration: 500,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-primary",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    // Usaremos imágenes dummy temáticas de hardware o espacio.
    const componentImages = [
    "Chip.png",          // Chip/Componente
    "interiorNave.png",  // Interior Nave
    "placa.png",         // Placa de Circuito
    "estacion.png",      // Estación Espacial
    "cabina.png"         // Cabina
    ];


    return (
        <div className="p-8 bg-base-200">
            <h1 className="text-3xl font-bold mb-6 text-accent">⚙️ Vistas del Hardware de la Misión</h1>
            {/**/}
            <div className="glide-06 relative w-full overflow-hidden rounded bg-base-100 shadow-xl shadow-base-300">
                {/* */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        {componentImages.map((src, index) => (
                            <li key={index} className="shrink-0 w-full md:w-[calc(100%/3)] px-3">
                                <img
                                    src={src}
                                    alt={`Hardware View ${index + 1}`}
                                    className="m-auto h-64 object-cover w-full max-w-full rounded-lg"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                {/* */}
                <div
                    className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
                    data-glide-el="controls"
                >
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-white/20 text-primary transition duration-300 hover:border-primary-focus focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                    >
                        ❮
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-white/20 text-primary transition duration-300 hover:border-primary-focus focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide"
                    >
                        ❯
                    </button>
                </div>
                {/* */}
                <div
                    className="absolute bottom-0 flex w-full items-center justify-center gap-2"
                    data-glide-el="controls[nav]"
                >
                    {componentImages.map((_, index) => (
                        <button
                            key={index}
                            className="group p-4"
                            data-glide-dir={`=${index}`}
                            aria-label={`goto slide ${index + 1}`}
                        >
                            <span className="block h-2 w-2 rounded-full bg-base-300 ring-1 ring-primary transition-colors duration-300 focus:outline-none"></span>
                        </button>
                    ))}
                </div>
            </div>
            {/**/}
        </div>
    )
}
