import React from 'react';
import Image from 'next/image';

function BigShow() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 p-8">
        {/* Affichage du produit à gauche */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/img/pcgaming.jpg"
            alt="Produit"
            className="w-full"
            width={800}
            height={600}
          />
        </div>
      </div>
      <div className="w-1/2 p-8">
        {/* Nom du produit en haut de la page */}
        <h1 className="text-white text-4xl font-bold mb-8">Pc Gaming BIG SHOW</h1>

        {/* Description de produit à droite */}
        <p className="text-white text-lg">
          Découvrez le PC Gamer Blanc Ultime, équipé de la puissante carte graphique MSI GeForce RTX 3080 et du redoutable processeur Intel Core i9-11900K. Ce chef d œuvre technologique repousse les limites du gaming et vous propulse au sommet de la performance.

La carte graphique MSI GeForce RTX 3080 vous offre des performances graphiques incomparables. Plongez au cœur de vos jeux préférés avec des détails ultra-réalistes, des effets visuels époustouflants et une fluidité exceptionnelle. Chaque image est rendue avec une clarté cristalline, vous permettant de vivre une expérience de jeu immersive comme jamais auparavant.

Le processeur Intel Core i9-11900K est un véritable monstre de puissance. Avec ses 8 cœurs et 16 threads, il offre des vitesses d exécution fulgurantes et une réactivité instantanée. Qu il s agisse de jeux gourmands en ressources, de streaming en direct ou de montage vidéo intensif, ce processeur répondra à toutes vos exigences avec une facilité déconcertante.

Le PC Gamer Blanc Ultime est conçu pour les perfectionnistes. Son boîtier élégant et épuré met en valeur sa conception haut de gamme, tandis que sa performance sans compromis vous garantit une expérience de jeu sans faille. Avec cette configuration exceptionnelle, vous pouvez vous attendre à des sessions de jeu fluides, des temps de chargement réduits et des performances à couper le souffle.

Plongez dans l univers du gaming avec le PC Gamer Blanc Ultime et préparez-vous à vivre des aventures virtuelles d une intensité incroyable. Que vous soyez un joueur passionné, un créateur de contenu ou un professionnel exigeant, cette machine surpuissante vous propulsera vers de nouveaux sommets de performance et de plaisir de jeu.
        </p>
      </div>
    </div>
  );
}

export default BigShow;
