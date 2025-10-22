"use client"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="bg-croatia-dark/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-croatia-red/30">
      <div className="w-full max-w-[1150px] mx-auto px-4">
        <div className="flex items-center justify-center h-12 md:h-16">
          <Logo size="sm" className="md:text-base lg:text-lg" />
        </div>
      </div>
    </header>
  )
}
