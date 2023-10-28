import Link from "next/link"
import { MoonIcon, SearchIcon } from "./icons"

export const Navbar = () => {
  return (
    <nav className="backdrop-blur-sm bg-slate-950/60 fixed top-0 w-full text-white flex items-center justify-evenly py-4 z-50">
      <div>
        <Link href="/">
          Logo
        </Link>
      </div>
      <ul className="flex [&>li]:px-4 font-semibold [&>li]:hover:transition-colors [&>li]:hover:duration-200 [&>li]:hover:ease-in [&>li]:cursor-pointer">
        <li className="hover:text-indigo-600">Inicio</li>
        <li className="hover:text-rose-600">Productos</li>
        <li className="hover:text-rose-600">Categorias</li>
        <li className="hover:text-rose-600">Nosotros</li>
      </ul>
      <div className="flex items-center [&>span]:mx-2">
        <span className="p-2 hover:bg-slate-900 rounded-md transition-all duration-200 ease-in">
          <SearchIcon width={20} height={20} />
        </span>
        <span className="p-2 hover:bg-slate-900 rounded-md transition-all duration-200 ease-in">
          <MoonIcon width={20} height={20} />
        </span>
      </div>
    </nav>
  )
}
