// Créer un programme qui affiche le résultat d’une puissance
const base = parseInt(process.argv[2]);
const exponent = parseInt(process.argv[3]);
const result = base ** exponent;
console.log(result);
