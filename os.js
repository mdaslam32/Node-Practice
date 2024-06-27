const os = require("os");
console.log("------ OS ------");
console.log("Type: " + os.type());
console.log("Version: " + os.version());
console.log("Home Directory: " + os.homedir());
console.log("Directory Name (Default): " + __dirname);
console.log("File Name (Default): " + __filename);
