// programme qui affiche le résultat et le reste d’une division entre deux nombres
const number = parseInt(process.argv[2]);

if (number % 2 === 0) {
  console.log(`${number} est pair.`);
} else if (isNaN(number)) {
  console.log("tu ne me la mettra pas à l'envers.");
} else {
  console.log(`${number} est impair`);
}
