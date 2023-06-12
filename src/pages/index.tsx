import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

function Index(){
  return(
<>
<h1 className='text-red-800 text-center text-4xl my-8'>
    Salam tu es bien sur Mehdi-E-Tech
</h1>
<div className="container mx-auto px-4"></div><div>
<form className="flex-grow flex justify-center mr-4"></form>
<input
                type="text"
                placeholder="Rechercher..."
                className="border border-gray-400 px-2 py-1 rounded-full"
              />
</div>
<div className="flex space-x-2"></div>
<p className="text-white text-center mb-8">
        Les promotions du moments 🥳🥳🥳
        </p>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4">
            
            <h3 className="text-xl mb-2">Ordinateurs gaming</h3>
            <p className="text-gray-500 mb-4">
              PC Gaming BIG SHOW 🤯🤯🤯
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500" style={{ fontSize: "20px" }}>2989,86 €</span>

              <a
                href="/test/public/ampoule1.jpeg"
                className="bg-blue-500 text-white px-4 py-2"
              >
                ajouter au panier
              </a>
            </div>
          </div>
          <div className="bg-white p-4">
            
            <h3 className="text-xl mb-2">Ecran Gaming</h3>
            <p className="text-gray-500 mb-4">
                Devenez un pro de la vision grace a votre écran 4K 165Hz 🥵🥵🥵
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500" style={{ fontSize: "20px" }}>1180,99 €</span>
              <a
                href="/test/public/ampoule1.jpeg"
                className="bg-blue-500 text-white px-4 py-2"
              >
                Ajouter au panier
              </a>
            </div>
          </div>

          <div className="bg-white p-4">
            
            <h3 className="text-xl mb-2">Chaise gaming</h3>
            <p className="text-gray-500 mb-4">
              Chaise gaming ultra confortable 💺💺💺
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500" style={{ fontSize: "20px" }}>250,99 €</span>
              <Image
                src= {"/img/chaise.png"}
              alt="Chaise gaming"
              width={300}
              height={0}
              />
                Ajouter au panier 
              
            </div>
          </div>
        </div>

 </>
  );
}
export default Index;