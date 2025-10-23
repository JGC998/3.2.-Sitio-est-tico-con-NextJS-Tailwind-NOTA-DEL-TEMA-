import MyDatePicker from "@/components/MyDatePicker";

function Page3() {

    return (
        <div className="p-8 text-center bg-base-200">
            <h1 className="text-3xl font-bold mb-6 text-accent">📅 Planificador de Fechas de Misión</h1>
            <div className="flex justify-center">
                <MyDatePicker />
            </div>
            <p className="mt-4 text-sm text-base-content/70">Selecciona el día clave para la próxima ventana de lanzamiento.</p>
        </div>
    );
}

export default Page3;
