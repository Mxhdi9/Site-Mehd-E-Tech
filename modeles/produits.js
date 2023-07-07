import{Model, Schema, model, modelNames, models} from "mongoose";

const ProductSchema = new Schema(definition: {
    nom: String,
    description: String,
    prix: Number,
    catégorie: String,
    image: String,
});

const Produits = models?.Produits || model(nom: 'Produit')