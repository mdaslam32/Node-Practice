const fs = require("fs");

if (!fs.existsSync("./newFolder")) {
  fs.mkdir("./newFolder", (err) => {
    if (err) throw err;
    console.log("Directory Created");
  });
} else {
  console.log("It is already exist");
}

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaughterror: ${err}`);
  process.exit(1);
});
