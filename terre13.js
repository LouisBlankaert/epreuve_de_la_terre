// trouver la suisse
function findSuisse(num1, num2, num3) {
  if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
    return num1;
  } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
    return num2;
  } else {
    return num3;
  }
}

const chiffre = process.argv.slice(2);

if (chiffre.length !== 3) {
  console.log("Veuillez entrer trois entiers en paramètres.");
} else {
  const num1 = parseInt(chiffre[0]);
  const num2 = parseInt(chiffre[1]);
  const num3 = parseInt(chiffre[2]);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Veuillez entrer des entiers valides.");
  } else {
    const middleValue = findSuisse(num1, num2, num3);
    console.log(`La valeur du milieu est : ${middleValue}`);
  }
}
