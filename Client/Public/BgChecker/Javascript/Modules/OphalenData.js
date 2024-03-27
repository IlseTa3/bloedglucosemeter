async function ophalenData() {
  const resp = await fetch("http://localhost:2023/bg-checker/all");
  console.log(resp);
  const data = await resp.json();
  let temp = "";
  for (let i = 0; i < data.bgmetingen.length; i++) {
    temp =
      temp +
      `<tr>
      <td class="metingId">${data.bgmetingen[i].Id}</td>
      <td>${data.bgmetingen[i].Datum} </td>
      <td>${data.bgmetingen[i].MT}</td>
      <td>${data.bgmetingen[i].BgVoorMT}</td>
      <td>${data.bgmetingen[i].BgNaMT}</td>
      </tr>`;
  }
  document.getElementById("data").innerHTML = temp;
}

export { ophalenData };
