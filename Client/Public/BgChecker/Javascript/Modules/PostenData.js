import { ophalenData } from "./OphalenData.js";
import grafiekData from "./GrafiekData.js";

const postenNieuweData = () => {
  let form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //DOM gelinkt aan alle inputvelden met id
    // let id = document.getElementById("Id").value;
    let datum = document.getElementById("Datum").value;
    let maaltijd = document.getElementById("Mt").value;
    let metingVoorMt = document.getElementById("BgVoorMt").value;
    let metingNaMt = document.getElementById("BgNaMt").value;

    let lastSeenId = parseInt(
      document.querySelector("#data > tr:last-child td.metingId").innerHTML
    );
    console.log(lastSeenId);

    //data ophalen
    let urlNew = "http://localhost:2023/bg-checker/new";
    fetch(urlNew, {
      method: "POST",
      body: JSON.stringify({
        Id: lastSeenId + 1,
        Datum: datum,
        MT: maaltijd,
        BgVoorMT: metingVoorMt,
        BgNaMT: metingNaMt,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === "OK") {
          ophalenData();
          grafiekData();
          window.location.assign("/bg-checker");
        } else {
          console.error("POST was unsuccessful");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  });
};

export default postenNieuweData;
