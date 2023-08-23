// programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument
if (process.argv.length !== 3) {
  console.log("erreur");
} else {
  const inputString = process.argv[2];
  const characterCount = inputString.length;

  if (!isNaN(inputString)) {
    console.log("erreur");
  } else {
    console.log(characterCount);
  }
}
