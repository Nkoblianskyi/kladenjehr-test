"use client"

import { bettingSites } from "@/types"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { RatingMethodology } from "@/components/rating-methodology"
import { TopOffersModal } from "@/components/top-offers-modal"
import { TopBettingSitesPortugal } from "@/components/top-betting-sites-portugal"
import { SportsVariety } from "@/components/sports-variety"

export default function Home() {
  return (
    <div className="min-h-screen bg-white md:bg-cover md:bg-center md:bg-fixed md:bg-no-repeat md:bg-[url('/croatia-sports-hero.jpg')]">
      <main className="relative z-10 max-w-[1250px] mx-auto">
        <Hero />
        <RatingList sites={bettingSites} />
        <SportsVariety />
        <TopBettingSitesPortugal />
        <RatingMethodology />
      </main>
      <TopOffersModal sites={bettingSites} />
    </div>
  )
}
