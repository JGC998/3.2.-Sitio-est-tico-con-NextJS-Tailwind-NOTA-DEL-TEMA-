import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import CountDown from "@/components/CountDown";
import SortedTable from "@/components/SortedTable";
import RadialProgress from "@/components/RadialProgress";


export default function Home() {
  return (
    <section className="p-4 md:p-8 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-primary">🚀 Panel de Control de Misión</h1>

      {/* FILA SUPERIOR: Visuales y Contadores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Carrusel de Cohetes (AutoCarousel) */}
        <div className="md:col-span-2">
            <h2 className="text-2xl mb-2">Vehículo de Lanzamiento</h2>
            <AutoCarousel />
        </div>

        {/* Indicadores Clave */}
        <div className="flex flex-col space-y-4">
            <h2 className="text-2xl">Estado de la Misión</h2>
            
            {/* Cuenta Regresiva (CountDown) */}
            <div className="stats shadow bg-neutral text-neutral-content">
                <div className="stat">
                    <div className="stat-title text-accent">Tiempo de Lanzamiento</div>
                    <CountDown from={120} />
                    <div className="stat-desc text-secondary">Inicia la secuencia en 2 minutos.</div>
                </div>
            </div>

            {/* Progreso Radial (RadialProgress) */}
            <div className="flex justify-center items-center p-4 bg-base-100 rounded-box shadow-md">
                <div className="text-lg mr-4">Nivel de Combustible:</div>
                <RadialProgress />
            </div>
        </div>
      </div>

      {/* TABS DE DATOS: Usando el componente Tabs de DaisyUI */}
      <div className="tabs tabs-boxed mb-8 p-4 bg-base-100 rounded-box shadow-lg">
        <input type="radio" name="mission_tabs" className="tab" aria-label="Control" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h3 className="text-xl font-semibold mb-3">Módulo de Control</h3>
          <div className="flex gap-4">
            <button className="btn btn-success btn-lg">Iniciar Secuencia</button>
            <button className="btn btn-error btn-lg">Abortar Misión</button>
            <div className="tooltip" data-tip="El cohete está en espera de comandos.">
                <p className="btn btn-info">Verificar Telemetría</p>
            </div>
          </div>
        </div>

        <input type="radio" name="mission_tabs" className="tab" aria-label="Datos de Vuelo" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h3 className="text-xl font-semibold mb-3">Parámetros de Vuelo</h3>
          <p>
            Presión en la cámara de combustión (PC): 102.5 bar. Velocidad del viento en la plataforma: 5 nudos.
          </p>
        </div>
        
        <input type="radio" name="mission_tabs" className="tab" aria-label="Componentes" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
            <h3 className="text-xl font-semibold mb-3">Lista de Componentes Críticos</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 btn-warning">Revisar Sensores</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><a>Sensor de Presión (OK)</a></li>
                  <li><a>Sensor de Temperatura (OK)</a></li>
                </ul>
            </div>
        </div>

      </div>

      {/* TABLA DE DATOS: Usando la tabla con clasificación */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Tabla de Misiones Históricas (Datos Simulados)</h2>
      <SortedTable />

    </section>
  );
}
