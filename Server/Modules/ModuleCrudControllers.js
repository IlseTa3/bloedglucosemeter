//Alle CRUD-controllers dewelke de acties zullen uitvoeren
//deze acties werden bepaald in de Module crudServices
import {
  readAllDataServices,
  updateDataServices,
  deleteDataServices,
  createNewDataServices,
} from "./ModuleCrudServices.js";
//const crudServices = require("./ModuleCrudServices");

//Controller voor alle data door te geven/te lezen
const readAllDataController = (req, res) => {
  const alleBgMetingen = readAllDataServices();
  res.send({ status: "OK", bgmetingen: alleBgMetingen });
};

//Controller om nieuwe data toe te voegen
const createNewDataController = (req, res) => {
  const { body } = req;
  if (!body.Id || !body.MT || !body.Datum || !body.BgVoorMT || !body.BgNaMT) {
    res.status(400).send({
      status: "FAILED",
      bgmetingen: {
        error:
          "Volgende gegevens zijn niet ingevuld: Id,MT,Datum, BgVoorMT,BgNaMT",
      },
    });
    return;
  }
  const nieuweMeting = {
    Id: body.Id,
    Datum: body.Datum,
    MT: body.MT,
    BgVoorMT: body.BgVoorMT,
    BgNaMT: body.BgNaMT,
  };
  try {
    const isAangemaakt = createNewDataServices(nieuweMeting);
    res.status(201).send({ status: "OK", bgmetingen: isAangemaakt });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

//Controller om bestaande data te wijzigen
const updateDataController = (req, res) => {
  const {
    body,
    param: { bgId },
  } = req;
  if (!bgId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':bgId' cannot be empty" },
    });
  }
  try {
    const updateMeting = updateDataServices(bgId, body);
    res.send({ status: "OK", data: updateMeting });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

//controller om bestaande data te verwijderen
const deleteDataController = (req, res) => {
  try {
    const {
      params: { Id },
    } = req;
    if (!Id) {
      const deleteData = deleteDataServices(Id);
      res.status(204).send({ status: "OK", data: deleteData });
      /*return res.status(400).send({
      status: "FAILED",
      data: { error: `"Parameter ':Id' cannot be empty"` },*/
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export {
  readAllDataController,
  createNewDataController,
  updateDataController,
  deleteDataController,
};
