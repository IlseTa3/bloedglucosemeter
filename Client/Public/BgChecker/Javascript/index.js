//import BloedglucoseMeting from "./Modules/Bloedglucosemeting.js";
import { ophalenData } from "./Modules/OphalenData.js";
import postenNieuweData from "./Modules/PostenData.js";
import grafiekData from "./Modules/GrafiekData.js";
import deleteData from "./Modules/DeletenData.js";
//import { updatenData, update1Knop } from "./Modules/UpdateData.js";

//Get
ophalenData();
//POST
postenNieuweData();

//DELETE
deleteData();

//Grafiek tonen
grafiekData();

//UPDATE (PUT)
//updatenData();
//update1Knop();
