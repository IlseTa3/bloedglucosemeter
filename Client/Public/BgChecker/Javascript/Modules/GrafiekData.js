//om de chart op te laden van chart.js
async function grafiekData() {
  const myChart = document.getElementById("myChart");
  const resp = await fetch("http://localhost:2023/bg-checker/all");
  console.log(resp);
  const data = await resp.json();
  const datum = [];
  const metingVoor = [];
  const metingNa = [];
  for (let i = 0; i < data.bgmetingen.length; i++) {
    datum.push(data.bgmetingen[i].Datum);
    metingVoor.push(data.bgmetingen[i].BgVoorMT);
    metingNa.push(data.bgmetingen[i].BgNaMT);
  }

  new Chart(myChart, {
    type: "line",
    data: {
      labels: datum,
      datasets: [
        {
          label: "Meting voor maaltijd",
          data: metingVoor,
          borderColor: "blue",
          fill: false,
        },
        {
          label: "Meting na maaltijd",
          data: metingNa,
          borderColor: "magenta",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: false },
    },
  });
}

export default grafiekData;
