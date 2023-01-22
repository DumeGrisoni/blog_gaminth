import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold py-2 md:px-4 px-4">
        <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
                <Image
                    src={logo}
                    width={64}
                    height={64}
                    alt="Logo de l'application"
                />
            </Link>
        </div>
        <div>
          <button className="rounded-full text-center text-[11px] md:text-[12px] lg:text-[14px] font-[500] ">Rejoindre la communauté </button>
        </div>
    </header>
  )
}

export default Header