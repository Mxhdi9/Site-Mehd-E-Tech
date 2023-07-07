import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mongoose from 'mongoose';

function Index() {
  return (
    <>
      <h1 className="text-white text-center text-4xl my-8">
        Salam, tu es bien sur Mehd-E-Tech
      </h1>

      <nav className="flex justify-center items-center mb-4">
        <div className="flex">
          <Link href="/" className="bg-purple-500 text-white px-4 py-2">
            Accueil
          </Link>

          <Link
            href="/Produits/produit"
            className="bg-purple-500 text-white px-4 py-2"
          >
            Produits
          </Link>

          <Link href="/index.tsx" className="bg-purple-500 text-white px-4 py-2">
            Panier (Maintenance)
          </Link>
        </div>
      </nav>

      <nav className="flex justify-end mb-4">
        <Link href="/LoginUser/loginUser">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 mb-2 dark:bg-red-700 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-red-800 ml-2"
          >
            <span className="inline-block text-white">Connexion</span>
          </button>
        </Link>

        <Link href="/Contact/contact">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 mb-2 dark:bg-red-700 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-red-800 ml-2"
          >
            <span className="inline-block text-white">Contact</span>
          </button>
        </Link>
      </nav>

      <div
        className="container mx-auto px-4 min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('/img/33HI.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4">
          <p className="text-green-500 text-center text-4xl grid-flow-col font-bold mt-8">
            Les promotions du moment 🎉🎉🎉
          </p>

          <div className="flex justify-between mt-8">
            <div className="bg-white bg-opacity-50 rounded-lg p-4 flex-1">
              <p>*Avis client* Un PC Gaming TOP, je recommande</p>
              <h3 className="text-xl mb-2">Ordinateurs gaming</h3>
              <p className="text-gray-500 mb-4">PC Gaming BIG SHOW 🤯🤯🤯</p>

              <div className="flex justify-between items-center">
                <span className="text-red-500 text-2xl font-bold" style={{ fontSize: '25px' }}>
                  2989,86€
                </span>
                <Image
                  src="/img/pcgaming.jpg"
                  alt="Ecran Gaming"
                  width={300}
                  height={200}
                />
                <Link
                  href="/EnSavoirPlus/bigshow"
                  className="bg-black text-white px-4 py-2"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            <div className="bg-white bg-opacity-50 rounded-lg p-4 flex-1 ml-4">
              <h3 className="text-xl mb-2">Ecran Gaming</h3>
              <p className="text-gray-500 mb-4">
                Devenez un pro de la vision grâce à votre écran 4K 165Hz 🥵🥵🥵
              </p>
              <div className="flex justify-between items-center">
                <span className="text-red-500 text-2xl font-bold" style={{ fontSize: '25px' }}>
                  499,99€
                </span>
                <Image
                  src="/img/moniteur.jpg"
                  alt="Ecran Gaming"
                  width={300}
                  height={200}
                />
                <Link
                  href="/EnSavoirPlus/moniteur"
                  className="bg-black text-white px-4 py-2"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            <div className="bg-white bg-opacity-50 rounded-lg p-4 flex-1 ml-4">
              <h3 className="text-xl mb-2">Chaise gaming</h3>
              <p className="text-gray-500 mb-4">Chaise gaming ultra confortable 💺💺💺</p>
              <div className="flex justify-between items-center">
                <span className="text-red-500 text-2xl font-bold">
                  250,99€
                </span>

                <Image
                  src="/img/chaise.png"
                  alt="Chaise gaming"
                  width={300}
                  height={200}
                />
                <Link
                  href="/EnSavoirPlus/chaise"
                  className="bg-black text-white px-4 py-2"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
