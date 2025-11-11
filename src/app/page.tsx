"use client"

import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { RatingMethodology } from "@/components/rating-methodology"
import { TopOffersModal } from "@/components/top-offers-modal"
import { TopBettingSitesPortugal } from "@/components/top-betting-sites-portugal"
import { SportsVariety } from "@/components/sports-variety"
import { OurChoice } from "@/components/our-choice"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Header } from "@/components/header"
import { bettingSites } from "../../types"

export default function Home() {
  return (
    <div className="min-h-screen bg-white md:bg-cover md:bg-center md:bg-fixed md:bg-no-repeat md:bg-[url('/croatia-sports-hero.jpg')]">
      <Header />
      <main className="relative z-10 max-w-[1250px] mx-auto">
        <Hero />
        <RatingList sites={bettingSites} />
        <SportsVariety />
        <TopBettingSitesPortugal />
        <RatingMethodology />
        <OurChoice sites={bettingSites} />
      </main>
      <Footer />
      <CookieBanner />
      <TopOffersModal sites={bettingSites} />
    </div>
  )
}
