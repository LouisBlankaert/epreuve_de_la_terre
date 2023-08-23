// programme qui affiche les arguments qu’il reçoit ligne par ligne
if (process.argv.length < 3) {
  console.log("écrivez une phrase");
}
for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}
