import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

  <div>
    
    <div className="bg-gray-100">
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-2xl font-bold text-center">Mon Site Informatique</h1>
      </header>

      <nav className="bg-gray-200 py-2">
        <ul className="flex justify-center">
          <li className="mr-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">Accueil</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">Produits</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">Panier</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-700">Contact</a>
          </li>
        </ul>
      </nav>

      <main className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Bienvenue sur notre site Informatique</h2>
        <p className="text-gray-700 mb-4">Découvrez notre large sélection de produits informatiques de qualité.</p>
        <p className="text-gray-700 mb-4">Nous proposons des ordinateurs, des composants, des périphériques et bien plus encore.</p>
        <p className="text-gray-700 mb-4">Parcourez notre catalogue et trouvez les meilleurs produits adaptés à vos besoins.</p>
      </main>

      <footer className="bg-blue-500 text-white py-4">
        <p className="text-center">Tous droits réservés &copy; 2023 Mon Site Informatique</p>
      </footer>
    </div>
</div>)

  
}
