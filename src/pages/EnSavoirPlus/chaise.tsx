import React from 'react';
import Image from 'next/image';

function Chaise() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 p-8">
        {/* Affichage du produit à gauche */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/img/chaise.png"
            alt="Produit"
            className="w-full"
            width={800}
            height={600}
          />
        </div>
      </div>
      <div className="w-1/2 p-8">
        {/* Nom du produit en haut de la page */}
        <h1 className="text-white text-4xl font-bold mb-8">Chaise Gaming</h1>

        {/* Description de produit à droite */}
        <p className="text-white text-lg">
          Découvrez la chaise gaming ultime en termes de confort, conçue spécialement pour les joueurs passionnés. Plongez dans une expérience de jeu immersive et prolongée grâce à cette chaise révolutionnaire.

La chaise gaming ultime est dotée d un design ergonomique qui soutient parfaitement votre corps pendant les longues sessions de jeu. Son dossier haut et ses coussins lombaires intégrés offrent un soutien optimal pour votre colonne vertébrale, réduisant ainsi les douleurs et les tensions. Vous pouvez vous concentrer pleinement sur votre jeu sans vous soucier des inconforts.

Cette chaise est équipée d un rembourrage de qualité supérieure qui garantit un confort absolu. Chaque centimètre de la chaise est recouvert d un matériau doux et durable, offrant une sensation agréable au toucher. Vous vous sentirez comme si vous étiez assis sur un nuage, même pendant les sessions de jeu les plus intenses.

L ajustabilité est également un aspect clé de cette chaise gaming. Vous pouvez régler la hauteur du siège pour trouver la position idéale qui correspond à votre taille et à votre posture. Les accoudoirs sont également réglables en hauteur et en angle, vous permettant de les ajuster pour un soutien optimal de vos bras et de vos poignets.

De plus, la chaise gaming ultime est dotée de fonctionnalités supplémentaires qui améliorent votre expérience de jeu. Elle est équipée d un support lombaire intégré qui peut être ajusté pour s adapter parfaitement à la courbure de votre dos. Vous pouvez ainsi maintenir une posture correcte et éviter les douleurs dorsales.

Cette chaise gaming est conçue pour durer. Sa structure solide et durable peut supporter des utilisateurs de différentes tailles et poids, offrant une stabilité et une durabilité exceptionnelles. Vous pouvez compter sur cette chaise pour vous accompagner pendant de nombreuses années de jeu intense.

Préparez-vous à des heures de confort optimal avec la chaise gaming ultime. Que vous jouiez pendant de courtes sessions ou que vous vous lanciez dans des marathons de jeu, cette chaise est là pour vous offrir un soutien inégalé et un confort absolu. Profitez d une expérience de jeu sans compromis et plongez dans une détente totale grâce à cette chaise gaming haut de gamme.
        </p>
      </div>
    </div>
  );
}

export default Chaise;
