import { Link } from "react-router-dom";
import "flowbite";
import images from "../assets/images";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-blue-800 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sticky">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={closeMenu} // Asegúrate de cerrar el menú al hacer clic en el logo
        >
          <img src={images.logo2} className="w-20" alt="Flowbite Logo" />
          <span className="mr-20 text-white font-bold">El Diamante</span>
        </Link>

        {/* Botón de menú responsive */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-around text-sm text-white border rounded-lg md:hidden hover:border focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menú de navegación */}
        <div
          className={`w-full md:block md:w-auto ${menuOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 hover:text-gray-600 md:hover:bg-transparent md:border-0 0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:text-white/70"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/productos"
                onClick={closeMenu}
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 hover:text-gray-600 md:hover:bg-transparent md:border-0 0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:text-white/70"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                onClick={closeMenu}
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 hover:text-gray-600 md:hover:bg-transparent md:border-0 0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:text-white/70"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
