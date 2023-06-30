import React from 'react';
import Image from 'next/image';

function Moniteur() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 p-8">
        {/* Affichage du produit à gauche */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/img/moniteur.jpg"
            alt="Produit"
            className="w-full"
            width={800}
            height={600}
          />
        </div>
      </div>
      <div className="w-1/2 p-8">
        {/* Nom du produit en haut de la page */}
        <h1 className="text-white text-4xl font-bold mb-8">Ecran Gaming 165 Hz</h1>

        {/* Description de produit à droite */}
        <p className="text-white text-lg">
          Découvrez l écran gaming 165 Hz ultime, offrant une expérience visuelle à couper le souffle. Plongez au cœur de l action avec des images d une fluidité exceptionnelle et des détails incroyablement nets.

Cet écran gaming haut de gamme est doté d un panneau IPS de pointe, offrant des couleurs vibrantes et une précision spectaculaire. Chaque pixel est rendu avec une clarté cristalline, vous permettant de voir les moindres détails de vos jeux préférés. Que vous exploriez des mondes fantastiques, participiez à des combats épiques ou viviez des moments intenses, cet écran vous transporte au cœur de l action avec une immersion totale.

Avec un taux de rafraîchissement de 165 Hz, cet écran vous offre des images d une fluidité exceptionnelle. Les mouvements sont incroyablement réactifs, éliminant pratiquement tout effet de flou et de traînée. Vous pouvez dire adieu aux décalages et aux saccades, et profiter d une expérience de jeu incroyablement fluide et réactive.

Que vous soyez un joueur professionnel ou passionné, cet écran est conçu pour répondre à vos besoins les plus exigeants. Son temps de réponse ultra-rapide de 1 ms réduit au minimum le décalage entre vos actions et ce qui se passe à l écran, vous offrant un avantage compétitif inégalé. Vous pouvez réagir plus rapidement aux situations, viser avec précision et prendre des décisions stratégiques en temps réel.

L écran gaming 165 Hz ultime est également doté de fonctionnalités avancées telles que la technologie FreeSync ou G-Sync, qui synchronisent le taux de rafraîchissement de l écran avec la sortie de votre carte graphique, éliminant ainsi les déchirures d écran et assurant une expérience de jeu parfaitement fluide.

Préparez-vous à une immersion visuelle totale avec l écran gaming 165 Hz ultime. Profitez d une qualité d image exceptionnelle, d une fluidité sans compromis et d une réactivité inégalée. Que vous soyez un joueur compétitif ou un passionné de jeux, cet écran repoussera les limites de vos performances et vous fera vivre des moments de jeu incroyables.
        </p>
      </div>
    </div>
  );
}

export default Moniteur;
