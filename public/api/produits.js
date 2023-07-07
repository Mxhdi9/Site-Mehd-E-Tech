import {initMongoose} from "../../lib/mongoose";
import Produits from "../../modeles/produits"

export default async function handle(req, res) {
   await initMongoose();
   res.json( await Produits.find().exec() );
}