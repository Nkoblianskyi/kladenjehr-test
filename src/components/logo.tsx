import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const imageSize = size === "sm" ? 36 : size === "lg" ? 56 : 48

  return (
    <Link href="/" className={`flex items-center hover:opacity-90 ${className}`}>
      <div className="relative flex flex-row items-center gap-3">
        <Image src="/favicon.ico" alt="Logo" width={imageSize} height={imageSize} className="rounded-lg" />
        <div className="flex flex-row items-center leading-tight gap-2">
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-croatia-red uppercase">kladenjehr</p>
        </div>
      </div>
    </Link>
  )
}
