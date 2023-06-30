import React from 'react';
import Link from 'next/link';

function Connexion() {
  return (
    <div
      className="container mx-auto px-4 min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/img/Erie.gif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-red-800 text-center text-4xl mb-8">
          Page de Connexion
        </h1>
        <form className="max-w-sm mx-auto">
          <label htmlFor="email" className="text-lg mb-2">
            Email :
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-gray-400 px-2 py-1 rounded mb-4 w-full"
          />

          <label htmlFor="password" className="text-lg mb-2">
            Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            className="border border-gray-400 px-2 py-1 rounded mb-4 w-full"
          />

          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Se connecter
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <Link href="/">
            <p className="text-blue-500 cursor-pointer">Retour à l'accueil</p>
          </Link>
          <Link href="/src/pages/InscriptionUser/insciptionUser">
            <p className="bg-blue-500 text-white px-4 py-2 rounded ml-2 cursor-pointer">
              Inscription
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
