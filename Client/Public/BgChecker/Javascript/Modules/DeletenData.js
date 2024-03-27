import grafiekData from "./GrafiekData.js";
import { ophalenData } from "./OphalenData.js";
let delbtn = document.getElementById("del");

const deleteData = () => {
  delbtn.addEventListener("click", () => {
    let urlDelete = "http://localhost:2023/bg-checker/1";
    fetch(urlDelete, {
      method: "DELETE",
    });
    ophalenData();
    grafiekData();
  });
};

export default deleteData;
