import { ophalenData } from "./OphalenData.js";

//alle knoppen UPD

const updatenData = () => {
  ophalenData();
  const upd = document.querySelectorAll(".btn-upd");
  if (upd !== undefined && upd !== null) {
    upd.forEach((update) => {
      update.addEventListener("click", () => {
        let tekst = document.getElementById("update");
        tekst.innerHTML = `<h3>GEUPDATED!</h3>`;
      });
      console.log("error");
    });
  }
};
//testen voor 1 specifieke knop

const update1Knop = () => {
  ophalenData();
  let updBtn = document.querySelector("#upd1");
  updBtn.addEventListener("click", () => {
    let demo = document.querySelector("#update");
    demo.innerHTML = `<h3>TESTING - GEKLIKT </h3>`;
  });
};

export { updatenData, update1Knop };
