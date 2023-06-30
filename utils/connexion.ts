import mongoose from 'mongoose';

// Définition de l'URL de connexion à MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/nom_de_la_base_de_donnees';

// Fonction de connexion à MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
    });
    console.log('Connexion à MongoDB établie avec succès!');
  } catch (error) {
    console.error('Erreur lors de la connexion à MongoDB:', error);
  }
}

// Appel de la fonction de connexion
connectToMongoDB();
