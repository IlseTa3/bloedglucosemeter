//om gegevens te kunnen opslaan in de database
import fs from "fs";

import * as PATH from "path";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const opslaanInDb = (db) => {
  fs.writeFileSync(
    PATH.join(__dirname, "..", "/Database/dbBgChecker.json"),
    JSON.stringify(db, null, 2),
    { encoding: "utf-8" },
    function (error) {
      if (error) {
        return console.log(error);
      }
      console.log("File saved!");
    }
  );
};

export default opslaanInDb;
