// programme qui permet de déterminer si l’argument donné est un entier pair ou impair
if (process.argv.length < 3) {
  console.log("écrivez une lettre");
} else {
  const startLetter = process.argv[2].toLowerCase();

  if (startLetter.length !== 1 || !/[a-z]/.test(startLetter)) {
    console.log("écrivez une seule lettre");
  } else {
    const startIndex = startLetter.charCodeAt(0) - "a".charCodeAt(0);
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = startIndex; i < alphabet.length; i++) {
      console.log(alphabet[i]);
    }
  }
}
