import Image from "next/image"
import { Star } from "lucide-react"
import Link from "next/link"
import { BettingSite } from "../../types"

interface RatingListProps {
  sites: BettingSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-5 w-5 fill-croatia-gold text-croatia-gold" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-5 w-5 text-gray-400" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-5 w-5">
            <Star className="absolute h-5 w-5 text-gray-400" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-5 w-5 fill-croatia-gold text-croatia-gold" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const getCardStyle = (index: number) => {
    if (index === 0) {
      return {
        container:
          "bg-gradient-to-br from-amber-50 via-white to-blue-50 border-2 border-yellow-500 shadow-lg hover:shadow-xl transition-shadow",
        logo: "bg-black border-r border-yellow-200 rounded-l-lg",
        content: "bg-white/80 backdrop-blur-sm",
        badge: "bg-yellow-500 text-white",
        borderColor: "border-yellow-500",
      }
    } else if (index === 1) {
      return {
        container:
          "bg-gradient-to-br from-slate-50 via-white to-gray-50 border-2 border-gray-400 shadow-lg hover:shadow-xl transition-shadow",
        logo: "bg-black border-r border-gray-300 rounded-l-lg",
        content: "bg-white/80 backdrop-blur-sm",
        badge: "bg-gray-400 text-white",
        borderColor: "border-gray-400",
      }
    } else if (index === 2) {
      return {
        container:
          "bg-gradient-to-br from-orange-50 via-white to-amber-50 border-2 border-orange-500 shadow-lg hover:shadow-xl transition-shadow",
        logo: "bg-black border-r border-orange-200 rounded-l-lg",
        content: "bg-white/80 backdrop-blur-sm",
        badge: "bg-orange-500 text-white",
        borderColor: "border-orange-500",
      }
    } else {
      return {
        container:
          "bg-gradient-to-br from-blue-50 via-white to-red-50 border-2 border-blue-300 shadow-md hover:shadow-lg transition-shadow",
        logo: "bg-black border-r border-blue-200 rounded-l-lg",
        content: "bg-white/80 backdrop-blur-sm",
        badge: "bg-blue-500 text-white",
        borderColor: "border-blue-300",
      }
    }
  }

  return (
    <section className="py-2 md:py-2">
      <div className="container mx-auto px-3 md:px-4 max-w-[1400px]">
        <div className="grid gap-2">
          {sites.map((site, index) => {
            const showBadge = index < 3 && site.badges.length > 0
            const cardStyle = getCardStyle(index)

            return (
              <div
                key={site.id}
                className={`relative rounded-lg overflow-visible transition-all pt-4 ${cardStyle.container}`}
              >
                {showBadge && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`${cardStyle.badge} px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap`}
                    >
                      {site.badges[0]}
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener referrer"
                  className="hidden lg:block cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <div className="grid grid-cols-[280px_1fr_240px_200px] items-center gap-6 p-6">
                    <div className={`flex items-center justify-center ${cardStyle.logo} p-6 h-[140px]`}>
                      <div className="relative h-20 w-full mt-4">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4">
                      <p className="text-xs font-semibold mb-2 uppercase tracking-wider text-gray-600">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="text-2xl font-bold leading-tight text-gray-900">{site.bonus}</h3>
                      {site.dopBonus && <p className="text-xl font-semibold mt-1 text-black">{site.dopBonus}</p>}
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4">
                      <div className="text-5xl font-bold mb-2 text-gray-900">{site.rating.toFixed(1)}</div>
                      <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                      <p className="text-xs text-gray-600">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 px-4">
                      <div className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-bold py-4 px-6 rounded-lg text-center shadow-md uppercase tracking-wide text-sm whitespace-nowrap">
                        Registriraj se
                      </div>
                      <span className="text-blue-600 hover:text-red-600 transition-colors font-semibold text-sm whitespace-nowrap">
                        Posjeti stranicu
                      </span>
                    </div>
                  </div>

                  <div className={`border-t ${cardStyle.borderColor} px-6 py-3 ${cardStyle.content} rounded-b-lg`}>
                    <p className="text-gray-600 text-xs leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Tablet Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener referrer"
                  className="hidden md:block lg:hidden cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <div className="grid grid-cols-[1fr_auto]">
                    <div className={`${cardStyle.logo} p-8 flex flex-col items-center justify-center`}>
                      <div className="relative h-20 w-48 mb-6">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">{renderStars(site.rating)}</div>
                        <span className="text-gray-900 font-bold text-2xl">{site.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div
                      className={`p-8 flex flex-col items-center justify-center min-w-[240px] ${cardStyle.content} rounded-tr-lg`}
                    >
                      <h3 className="text-gray-900 text-2xl font-bold text-center mb-1 leading-tight">{site.bonus}</h3>
                      {site.dopBonus && <p className="text-black text-base font-semibold mb-2">{site.dopBonus}</p>}
                      <p className="text-gray-600 text-sm mb-6">U besplatnim okretima</p>
                      <div className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-bold py-4 px-6 rounded-lg text-center uppercase tracking-wide text-sm whitespace-nowrap shadow-md">
                        Registriraj se
                      </div>
                    </div>
                  </div>

                  <div className={`${cardStyle.content} px-6 py-4 border-t ${cardStyle.borderColor} rounded-b-lg`}>
                    <p className="text-gray-600 text-xs leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Mobile Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener referrer"
                  className="md:hidden block cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <div className="grid grid-cols-[40%_60%] gap-0">
                    <div className={`${cardStyle.logo} p-6 flex flex-col items-center justify-center rounded-tl-lg`}>
                      <div className="relative h-16 w-32 mb-4">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex gap-0.5">{renderStars(site.rating)}</div>
                        <span className="text-white font-bold text-lg">{site.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-white text-[10px] text-center">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    <div className={`p-6 flex flex-col items-center justify-center ${cardStyle.content} rounded-tr-lg`}>
                      <h3 className="text-gray-900 text-lg font-bold text-center mb-0.5 leading-tight">{site.bonus}</h3>
                      {site.dopBonus && <p className="text-black text-xs font-semibold mb-2">{site.dopBonus}</p>}
                      <div className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-bold py-3 px-4 rounded-lg text-center shadow-md uppercase tracking-wide text-xs whitespace-nowrap">
                        Registriraj se
                      </div>
                    </div>
                  </div>

                  <div className={`${cardStyle.content} px-4 py-3 border-t ${cardStyle.borderColor} rounded-b-lg`}>
                    <p className="text-gray-600 text-[10px] leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
