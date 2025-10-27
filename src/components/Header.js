import Link from "next/link";
import ThemeSelect from "./ThemeSelect";

function Header() {
    return (

        <div className="navbar bg-base-500 shadow-sm">

            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Inicio</Link>
                <ThemeSelect />
            </div>
            <div className="flex-none pr-20">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/pagina1">Registro de lanzamiento</Link>
                    </li>
                    <li>
                        <Link href="/pagina2">Reloj de Misión</Link>
                    </li>
                    <li>
                        <Link href="/pagina3">Planificador de Fechas de misión</Link>
                    </li>
                    <li>
                        <Link href="/pagina4">Comparativa de Cohetes</Link>
                    </li>
                    <li>
                        <Link href="/pagina5">Hardware de la misión</Link>
                    </li>
                    


           


                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content fixed top-0 right-0 z-10">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className=" btn btn-primary drawer-button size-15 rounded-full">Navegación</label>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <li><Link href="/pagina1">Registro de lanzamiento</Link></li>
                                <li><Link href="/pagina2">Reloj de Misión</Link></li>
                                <li><Link href="/pagina3">Planificador de Fechas de misión</Link></li>
                                <li><Link href="/pagina4">Comparativa de Cohetes</Link></li>
                                <li><Link href="/pagina5">Hardware de la misión</Link></li>
                            </ul>
                        </div>
                    </div>


                </ul>
            </div>
        </div>


    );
}

export default Header;
