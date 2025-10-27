import Link from "next/link";
import ThemeSelect from "./ThemeSelect";
import { FaRocket, FaClock, FaCalendarAlt, FaBalanceScale, FaCogs, FaHome, FaBars } from 'react-icons/fa';

function Header() {
    return (

        <div className="navbar bg-base-500 shadow-sm">

            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    <FaHome className="mr-2" />
                    Inicio
                </Link>
                <ThemeSelect />
            </div>
            <div className="flex-none pr-20">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/pagina1">
                            <FaRocket />
                            Registro de lanzamiento
                        </Link>
                    </li>
                    <li>
                        <Link href="/pagina2">
                            <FaClock />
                            Reloj de Misión
                        </Link>
                    </li>
                    <li>
                        <Link href="/pagina3">
                            <FaCalendarAlt />
                            Planificador
                        </Link>
                    </li>
                    <li>
                        <Link href="/pagina4">
                            <FaBalanceScale />
                            Comparativa
                        </Link>
                    </li>
                    <li>
                        <Link href="/pagina5">
                            <FaCogs />
                            Hardware
                        </Link>
                    </li>
                    


           


                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content fixed top-0 right-0 z-10">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className=" btn btn-primary drawer-button size-15 rounded-full">
                                <FaBars />
                            </label>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <li><Link href="/pagina1"><FaRocket className="mr-2" />Registro de lanzamiento</Link></li>
                                <li><Link href="/pagina2"><FaClock className="mr-2" />Reloj de Misión</Link></li>
                                <li><Link href="/pagina3"><FaCalendarAlt className="mr-2" />Planificador de Fechas</Link></li>
                                <li><Link href="/pagina4"><FaBalanceScale className="mr-2" />Comparativa de Cohetes</Link></li>
                                <li><Link href="/pagina5"><FaCogs className="mr-2" />Hardware de la misión</Link></li>
                            </ul>
                        </div>
                    </div>


                </ul>
            </div>
        </div>


    );
}

export default Header;
