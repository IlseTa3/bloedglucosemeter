import Express from "express";
const endpoints = Express.Router();
import {
  readAllDataController,
  createNewDataController,
  updateDataController,
  deleteDataController,
} from "./ModuleCrudControllers.js";
//Endpoints om de CRUD's op te vangen
//get voor alle data te laten tonen
endpoints.get("/all", readAllDataController);
// endpoints.route('/all').get(readAllDataController); R&E methode

//post om nieuwe data toe te voegen
endpoints.post("/new", createNewDataController);
//patch om bestaande data te wijzigen/updaten
endpoints.put("/:bgId", updateDataController);
//delete om bestaande data te verwijderen
endpoints.delete("/:bgId", deleteDataController);

export default endpoints;
