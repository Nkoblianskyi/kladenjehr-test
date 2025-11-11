"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BettingSite } from "../../types"


interface TopOffersModalProps {
  sites: BettingSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal on first visit
    const hasVisited = localStorage.getItem("hasVisitedBefore")

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("hasVisitedBefore", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)
      } else {
        starElements.push(<Star key={i} className="h-4 w-4 text-gray-300" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[500px] p-0 rounded-xl overflow-hidden border border-gray-200 shadow-xl">
        {/* Header section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-red-600 px-6 py-8">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-white mb-2">Najbolja Ponuda Dana</DialogTitle>
            <p className="text-center text-white/95 text-sm">Ekskluzivna ponuda za nove igrače</p>
          </DialogHeader>
        </div>

        {/* Content section */}
        <div className="bg-white px-6 py-8">
          {/* Logo container */}
          <div className="relative bg-gray-50 h-24 w-full max-w-[200px] mx-auto mb-6 rounded-lg border border-gray-200 overflow-hidden">
            <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain p-3" />
          </div>

          {/* Rating stars */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.stars)}</div>
            <span className="font-bold text-xl text-gray-900">{topSite.rating.toFixed(1)}</span>
            <span className="text-gray-500 text-sm">({topSite.reviews} recenzija)</span>
          </div>

          {/* Bonus section */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 text-center border border-amber-200 mb-6">
            <div className="text-gray-600 text-xs uppercase font-semibold tracking-wider mb-2">Bonus Dobrodošlice</div>
            <p className="font-bold text-gray-900 text-3xl leading-tight">{topSite.bonus}</p>
          </div>

          {/* CTA Button */}
          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-lg text-center transition-colors mb-4"
            onClick={() => setIsOpen(false)}
          >
            Preuzmi Bonus
          </a>

          {/* Terms */}
          <div className="text-center bg-gray-50 border border-gray-200 rounded-lg p-3">
            <p className="text-xs text-gray-600">+18 | Primjenjuju se Uvjeti | Kockajte se Odgovorno</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
