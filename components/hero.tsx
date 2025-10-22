"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="relative py-8 md:py-12 overflow-hidden pt-20 md:pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url('/croatia-sports-hero.jpg')",
          backgroundPosition: "center center",
        }}
      />

      <div className="absolute inset-0 bg-black/75 md:bg-black/60" />
      {/* </CHANGE> */}

      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-red-600 to-amber-500" />
      {/* </CHANGE> */}

      <div className="container mx-auto sm:max-w-[1280px] relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Najbolje Kladionice u Hrvatskoj
            </h1>

            <div className="inline-block border-b-2 border-amber-500 pb-2 mb-6">
              <p className="text-amber-400 text-lg md:text-xl font-medium">Stručne Recenzije i Usporedbe</p>
            </div>

            <p className="hidden md:block text-white/90 text-sm md:text-sm leading-relaxed max-w-2xl mx-auto mb-4">
              Detaljne analize najboljih legalnih kladionica u Hrvatskoj. Usporedite bonuse, kvote i platforme za
              sportsko klađenje.
            </p>
          </div>
          {/* </CHANGE> */}

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-4">
            <div className="text-center">
              <div className="text-white font-semibold text-sm md:text-sm mb-1">Licencirane</div>
              <div className="text-white/60 text-xs md:text-xs">100% Legalne</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-white font-semibold text-sm mb-1">Provjerene</div>
              <div className="text-white/60 text-xs">Stručno Testirane</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-white font-semibold text-sm mb-1">Ažurirano</div>
              <div className="text-white/60 text-xs">
                {new Date().toLocaleDateString("hr-HR", { month: "long", year: "numeric" })}
              </div>
            </div>
          </div>
          {/* </CHANGE> */}

          <div className="text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg py-4 px-6 border border-white/10">
              <span className="text-amber-400 font-semibold text-sm">Igrajte odgovorno +18</span>
              <span className="hidden md:inline text-white/30">|</span>
              <button
                onClick={openModal}
                className="text-white/80 hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                Oglašivačke Informacije
              </button>
            </div>
          </div>
          {/* </CHANGE> */}
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
