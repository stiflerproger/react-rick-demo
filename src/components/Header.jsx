import {Link} from "react-router-dom";

export default function Header() {
  return (
    <nav className="z-50 bg-white">
      <div className="h-10vh flex justify-between items-center gap-10 lg:py-5 px-5 py-5 border-b">
        <div className="flex items-center flex-1">
          <h2 className="text-3xl font-bold text-pink-500">Rick&Morty</h2>
        </div>
        <div>
          <ul className="flex gap-8 text-black mr-16 text-[18px]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/characters">Characters</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/episodes">Episodes</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


