import MyDatePicker from "@/components/MyDatePicker";


function Page1() {
    const fechaActual = new Date();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-secondary">Registro de Lanzamiento 🚀</h1>
            <p className="mb-4 text-sm">Fecha y hora actual del sistema: <span className="font-mono text-primary">{fechaActual.toISOString()}</span></p>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="card bg-base-100 shadow-xl p-4 w-full md:w-1/2">
                    <h2 className="card-title mb-4">Selección de Fecha de Misión</h2>
                    <MyDatePicker />
                    <p className="text-xs mt-4">Usa este componente para seleccionar la fecha de destino de la misión.</p>
                </div>

                <div className="card bg-base-100 shadow-xl p-6 w-full md:w-1/2 space-y-4">
                    <h2 className="card-title">Parámetros de Vuelo Programados</h2>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Fecha de Despegue Planeada (T-0)</span></div>
                        <input type="date" className="input input-bordered w-full"
                            defaultValue="2025-01-20"
                            min="2025-01-01"
                            max="2026-12-31" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Hora de Ventana de Lanzamiento</span></div>
                        <input type="datetime-local" className="input input-bordered w-full" defaultValue="2025-01-20T10:30" />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Page1;
