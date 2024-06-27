//! Importing required modules
const fs = require("fs");
const path = require("path");

//! Read a file using readFile()
fs.readFile(path.join(__dirname, "readFile.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//! Write a new file using writeFile()
fs.writeFile(
  path.join(__dirname, "writeFile.txt"),
  "New file were created and writen by writeFile()",
  (err) => {
    console.log("Writing a new file is completed");

    //! Edit an existing file using appendFile()
    fs.appendFile(
      path.join(__dirname, "writeFile.txt"),
      "\n\nThis line were appended by appendFile()",
      (err) => {
        console.log("Appending a text of existing file were updated");
      }
    );
  }
);
//! Capturing the uncaughtException error using process.on()
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught ${err}`);
  process.exit(1);
});
