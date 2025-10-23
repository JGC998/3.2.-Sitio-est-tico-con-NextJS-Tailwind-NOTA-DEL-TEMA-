import Diff from "@/components/Diff";

function Page4() {

    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-8 text-primary">Comparativa de Vehículos de Lanzamiento 🛰️</h1>
            <div className="flex justify-center">
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <h2 className="text-xl mb-4">Modelo 1 (Normal) vs. Modelo 2 (Efecto Blur)</h2>
                    <Diff />
                </div>
            </div>
            <p className="mt-8 text-lg">Utiliza el deslizador para comparar los dos diseños de cohete o las condiciones de lanzamiento.</p>
        </div>
    );
}

export default Page4;
