// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h
const hours = parseInt(process.argv[2]);
let ampm = hours >= 12 && hours < 24 ? "PM" : "AM";

if (hours === 12 || hours === 24) {
  hoursampm = 12;
} else {
  hoursampm = hours % 12;
}
console.log(hoursampm + ampm);
