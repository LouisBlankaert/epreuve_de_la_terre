//programme qui affiche son nom de fichier
const path = require("path");

const currentFileName = path.basename(__filename);

console.log(`nom du fichier: ${currentFileName}`);
