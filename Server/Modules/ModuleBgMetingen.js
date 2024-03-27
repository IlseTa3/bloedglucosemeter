import db from "../Database/dbBgChecker.json" assert { type: "json" };
import opslaanInDb from "./ModuleDb.js";

//Alle data opvragen uit de database
const readAllData = () => {
  return db.bloedglucosemetingen;
};

//nieuwe data toevoegen
const createNewData = (nieuweMeting) => {
  const isAlToegevoegd =
    db.bloedglucosemetingen.findIndex(
      (meting) => meting.Id === nieuweMeting.Id
    ) > -1;
  if (isAlToegevoegd) {
    throw {
      status: 400,
      message: `Meting met Id ${nieuweMeting.Id} werd reeds toegevoegd`,
    };
  }
  try {
    db.bloedglucosemetingen.push(nieuweMeting);
    opslaanInDb(db);
    return nieuweMeting;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

//bestaande data updaten
const updateData = (bgId, updates) => {
  try {
    const indexForUpdate = db.bloedglucosemetingen.findIndex(
      (meting) => meting.Id === bgId
    );

    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Cannot find id ${bgId}`,
      };
    }
    const updateMeting = {
      ...db.bloedglucosemetingen[indexForUpdate],
      ...updates,
    };
    db.bloedglucosemetingen[indexForUpdate] = updateMeting;
    opslaanInDb(db);
    return updateMeting;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

//Verwijderen van bestaande data
const deleteData = (Id) => {
  try {
    const indexForDel = db.bloedglucosemetingen.findIndex(
      (meting) => meting.Id === Id
    );

    if (indexForDel > -1) {
      throw {
        status: 400,
        message: `Cannot find Id ${Id}`,
      };
    }
    db.bloedglucosemetingen.splice(indexForDel, 1);
    opslaanInDb(db);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

//Exporteren van de modules
export { readAllData, createNewData, updateData, deleteData };
