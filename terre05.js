// affiche le résultat et le reste d’une division entre deux nombres
const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[3]);
const quotient = Math.floor(y / x);
const remainder = y % x;
console.log(`resultat ${quotient}, reste ${remainder}`);
