import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-[1280px] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" size="lg" />
            <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-md">
              kladenjehr.com pruža neovisne usporedbe platformi za sportsko klađenje u Hrvatskoj. Naša misija je pomoći
              vam pronaći najbolje kladionice s najboljim bonusima i uvjetima.
            </p>
            <p className="text-xs text-gray-500 max-w-md">
              Možemo primati provizije od istaknutih brendova, što može utjecati na rang liste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide">Informacije</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-croatia-red transition-colors">
                  O Nama
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-croatia-red transition-colors">
                  Politika Privatnosti
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-600 hover:text-croatia-red transition-colors">
                  Politika Kolačića
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide">Odgovorno Klađenje</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="leading-relaxed">
                Klađenje može izazvati ovisnost. Igrajte odgovorno i samo ako imate 18+ godina.
              </p>
              <p className="text-xs text-gray-500">Ako trebate pomoć, kontaktirajte organizacije za podršku.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-sm font-bold mb-6 text-gray-900 text-center uppercase tracking-wide">
            Partneri za Odgovorno Klađenje
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
            >
              <div className="relative w-[90px] h-[36px]">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
            >
              <div className="relative w-[90px] h-[36px]">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
            >
              <div className="relative w-[90px] h-[36px]">
                <Image src="/gamble-aware.png" alt="BeGambleAware" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamblingtherapy.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
            >
              <div className="relative w-[90px] h-[36px]">
                <Image src="/GamblingCare-w.png" alt="Gambling Therapy" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
            >
              <div className="relative w-[90px] h-[36px] bg-gray-900 rounded px-2 py-1">
                <Image src="/gamcare.png" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} kladenjehr.com. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  )
}
