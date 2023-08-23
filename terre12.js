// Créer un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h
let time = "11:40 PM";
let hour = time.split(" ")[0].split(":")[0];
let mins = time.split(" ")[0].split(":")[1];
let code = time.split(" ")[1];
console.log(hour + ":" + mins + code);

let newTime = "";
if (code == "PM") {
  let newHour = Number(hour) + 12;
  newTime = newHour + ":" + mins;
} else {
  newTime = time.split(" ")[0];
}
console.log(newTime);
