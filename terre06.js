// programme qui affiche l’inverse de la chaîne de caractères donnée en argument
function reverseString(str) {
  return str.split("").reverse().join("");
}

const normalString = process.argv[2];
const reversedString = reverseString(normalString);
console.log(reversedString);
