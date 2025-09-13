// src/components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white text-red-500 p-4 flex justify-between items-center">

      
      {/* Nome + Logo */}
      <div className="flex items-center gap-2">
        <Image 
          src="/pokemon-ball.png" // Coloque sua imagem em public/pokemon-ball.png
          alt="Pokébola" 
          width={32} 
          height={32} 
        />
        <h1 className="text-xl font-bold">Pokédex</h1>
      </div>

      {/* Link Favoritos */}
      <nav>
        <Link 
          href="/favoritos" 
          className="text-lg font-semibold hover:text-yellow-300"
        >
          Favoritos
        </Link>
      </nav>
    </header>
  )
}
