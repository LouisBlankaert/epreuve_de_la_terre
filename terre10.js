// Créez un programme qui affiche si un nombre est premier
const number = process.argv[2];

if (number == 1 || number == 0) {
  console.log("erreur");
} else if (number % 2 === 0) {
  console.log(`${number} est un nombre premier`);
} else {
  console.log(`${number} n'est pas un nombre premier`);
}
