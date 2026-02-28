const figlet=require("Figlet")



figlet("HARITH LOVES LIKHITA", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});