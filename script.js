// Remplacer les données à chaque chargement de page par les informations reçues par l'API

// 1. Récupérer les infos par leurs identifiants
const cardContainer = document.getElementById("card-container");
const cardName = document.getElementById("name");
const cardGender = document.getElementById("gender");
const cardEmail = document.getElementById("email");
const cardBirthday = document.getElementById("age");
const cardAddress = document.getElementById("location");
const cardImage = document.getElementById("picture");
const cardPhone = document.getElementById("phone");

// console.log(cardName);
// console.log(cardBirthday);

// 2. Ajouter un événement
// Dès que la page est chargée, j'exécute un énévement
window.addEventListener("DOMContentLoaded", fetchRandomUser); // JS attend que le HTML soit chargé avant d'agir

// 3. Fonction pour aller chercher un utilisateur
async function fetchRandomUser() {
  const request = await fetch("https://randomuser.me/api/?results=20");
  const response = await request.json();
  const users = response.results; // tableau pour récupérer 20 utilisateurs

  //   const user = response.results[0]; // je récupère un utilisateur

  // Boucle pour afficher les 20 utilisateurs
  for (let index = 0; index < users.length; index++) {
    const user = users[index];

    // 4. Remplacer les infos de la carte
    document.body.innerHTML += `
  <div class="card" id="card-container">
  <div class="card-header">
    <img
      id="picture"
      src="${user.picture.large}"
      alt="Photo de profil"
    />
  </div>
  <div class="card-body">
    <p class="info-title">Nom & Prénom</p>
    <h2 class="info-value" id="name">${user.name.first} ${user.name.last}</h2>
    <p class="info-title">Genre</p>
    <h2 class="info-value" id="gender">${
      user.gender == "female" ? "Femme" : "Homme"
    }</h2>
    <p class="info-title">Adresse e-mail</p>
    <h2 class="info-value" id="email">${user.email}</h2>
    <p class="info-title">Âge</p>
    <h2 class="info-value" id="age">${user.dob.age}</h2>
    <p class="info-title">Adresse postale</p>
    <h2 class="info-value" id="location">${user.location.street.number} ${
      user.location.street.name
    }, ${user.location.city}</h2>
    <p class="info-title">N° Téléphone</p>
    <h2 class="info-value" id="phone">${user.phone}</h2>
  </div>
`;
  }

  //   if(user.gender == "female"){
  //     gender.innerHTML = "Femme"
  //   } else {
  //     gender.innerHTML = "Homme"
  //   }
}
