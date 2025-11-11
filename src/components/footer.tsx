import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="container mx-auto px-4 max-w-[1280px] py-16 md:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <Logo  size="lg" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              kladenjehr.com pruža neovisne usporedbe platformi za sportsko klađenje u Hrvatskoj. Naša misija je pomoći
              vam pronaći najbolje kladionice s najboljim bonusima i uvjetima.
            </p>
            <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-800/50 p-4 rounded-lg border border-gray-800">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Možemo primati provizije od istaknutih brendova, što može utjecati na rang liste.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-gray-800 pb-3">
              Informacije
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-croatia-red rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  O Nama
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-croatia-red rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Politika Privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-croatia-red rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Politika Kolačića
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-gray-800 pb-3">
              Odgovorno Klađenje
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-5 rounded-lg border border-red-900/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-lg font-bold">18+</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Klađenje može izazvati ovisnost. Igrajte odgovorno i samo ako imate 18+ godina.
                  </p>
                </div>
                <p className="text-xs text-gray-500 pl-11">Ako trebate pomoć, kontaktirajte organizacije za podršku.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Partners */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h3 className="text-white font-bold mb-8 text-center text-sm uppercase tracking-wider">
            Partneri za Odgovorno Klađenje
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/pbsvi.svg" alt="pbsvi" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/hupis.png" alt="hupis" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} kladenjehr.com. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  )
}
