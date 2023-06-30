import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

function Produits () {

return ( 
    <>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4">
            <p>{"*Avis client* Un PC Gaming TOP je recommande"}</p>
            <h3 className="text-xl mb-2">Ordinateurs gaming</h3>
            <p className="text-gray-500 mb-4">PC Gaming BIG SHOW 🤯🤯🤯</p>

            <div className="flex justify-between items-center">
              <span className="text-gray-500" style={{ fontSize: '20px' }}>
                2989,86 €
              </span>
              <Image
                src="/img/pcgaming.jpg"
                alt="Ecran Gaming"
                width={300}
                height={0}
              />
              <Link href="/src/pages/Produits/produit.tsx" className="bg-black text-white px-4 py-2">
                Ajouter au panier 
              </Link>
            </div>
          </div>
          <div className="bg-white p-4">
            <h3 className="text-xl mb-2">Ecran Gaming</h3>
            <p className="text-gray-500 mb-4">
              Devenez un pro de la vision grâce à votre écran 4K 165Hz 🥵🥵🥵
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500" style={{ fontSize: '20px' }}>
                499,99 €
              </span>
              <Image
                src="/img/ecrangaming.jfif"
                alt="Ecran Gaming"
                width={300}
                height={0}
              />
              <Link href="/EnSavoirPlus/moniteur" className="bg-black text-white px-4 py-2">
                Ajouter au panier
              </Link>
            </div>
          </div>

          <div className="bg-white p-4">
            <h3 className="text-xl mb-2">Chaise gaming</h3>
            <p className="text-gray-500 mb-4">Chaise gaming ultra confortable 💺💺💺</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500" style={{ fontSize: '20px' }}>
                250,99 €
              </span>
              <Image
                src="/img/chaise.png"
                alt="Chaise gaming"
                width={300}
                height={0}
              />
              <Link href="/Panier" className="bg-black text-white px-4 py-2">
                Ajouter au panier 
              </Link>
            </div>
        </div>
    </div>
    
    </> )}