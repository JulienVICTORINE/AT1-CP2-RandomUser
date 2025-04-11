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
  const request = await fetch("https://randomuser.me/api/");
  const response = await request.json();
  const user = response.results[0]; // je récupère l'utilisateur

  // 4. Remplacer les infos de la carte
  cardContainer.innerHTML = `
    <div class="card-header">
        <img
        src="${user.picture.large}"
        alt="Photo de profil"
        />
    </div>
    <div class="card-body">
        <p class="info-title">Nom & Prénom</p>
        <h2 class="info-value">${user.name.first} ${user.name.last}</h2>
        <p class="info-title">Genre</p>
        <h2 class="info-value">${
          user.gender == "female" ? "Femme" : "Homme"
        }</h2>
        <p class="info-title">Adresse e-mail</p>
        <h2 class="info-value">${user.email}</h2>
        <p class="info-title">Âge</p>
        <h2 class="info-value">${user.dob.age}</h2>
        <p class="info-title">Adresse postale</p>
        <h2 class="info-value">${user.location.street.number} ${
    user.location.street.name
  }, ${user.location.city}</h2>
        <p class="info-title">N° Téléphone</p>
        <h2 class="info-value">+${user.phone}</h2>
    </div>
    `;

  //   if(user.gender == "female"){
  //     gender.innerHTML = "Femme"
  //   } else {
  //     gender.innerHTML = "Homme"
  //   }
}
