//opvragen databasegegevens uit dbBgChecker-file
//const bgMetingen = require("../Modules/ModuleBgMetingen");
import {
  readAllData,
  createNewData,
  updateData,
  deleteData,
} from "./ModuleBgMetingen.js";
//CRUD - uitvoeringen in method
//Alle data opvragen
const readAllDataServices = () => {
  const alleDataTonen = readAllData();
  return alleDataTonen;
};

//nieuwe data toevoegen

const createNewDataServices = (nieuweMeting) => {
  const metingToevoegen = {
    ...nieuweMeting,
  };
  const isAangemaakt = createNewData(metingToevoegen);
  return isAangemaakt;
};

//bestaande data wijzigen

const updateDataServices = (bgId, updates) => {
  const updateMeting = updateData(bgId, updates);
  return updateMeting;
};

//bestaande data verwijderen

const deleteDataServices = (Id) => {
  try {
    deleteData(Id);
  } catch (error) {
    throw error;
  }
};

export {
  readAllDataServices,
  updateDataServices,
  deleteDataServices,
  createNewDataServices,
};
