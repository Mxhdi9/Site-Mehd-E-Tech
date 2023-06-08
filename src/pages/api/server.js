const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Implémentez ici la logique de traitement et d'envoi de l'email
  console.log('Nom:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Le serveur est démarré sur le port ${port}`);
});
