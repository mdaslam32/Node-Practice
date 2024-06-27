//! Importing required modules
const fsPromises = require("fs").promises;
const path = require("path");

const fileOpp = async () => {
  try {
    //! Read a file using readFile()
    const data = await fsPromises.readFile(
      path.join(__dirname, "readFile.txt"),
      "utf-8"
    );
    console.log(data);
    //! Write a new file using writeFile()
    await fsPromises.writeFile(
      path.join(__dirname, "writeFile.txt"),
      "New file were created and writen by writeFile()"
    );
    console.log("Writing a new file is completed");
    //! Edit an existing file using appendFile()
    await fsPromises.appendFile(
      path.join(__dirname, "writeFile.txt"),
      "\n\nThis line were appended by appendFile()"
    );
    console.log("Appending a text of existing file were updated");
  } catch (err) {
    console.log(err);
  }
};
fileOpp();
//! Capturing the uncaughtException error using process.on()
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught ${err}`);
  process.exit(1);
});
