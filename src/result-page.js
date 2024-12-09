import createCloseButton from "./close-button";
import cleanDOM from "./dom-cleaner";
import content from "./index";
import createTableRow from "./table-row";

export default function buildResultPage(result) {
  cleanDOM();
  content.classList.add("result");

  const div = document.createElement("div");

  const temp = document.createElement("h1");
  const tempResult = Math.round(result.temp);
  temp.classList.add("temp");
  temp.textContent = `${tempResult}°`;
  div.appendChild(temp);

  const condition = document.createElement("h4");
  const conditionResult = result.conditions;
  condition.classList.add("condition");
  condition.textContent = conditionResult;
  if (result.conditions.length >= 10) {
    condition.style.fontSize = "1.8rem"
  }
  div.appendChild(condition);

  const table = document.createElement("table");
  table.classList.add("data");

  const tbody = document.createElement("tbody");

  const trows = [
    { th: "Windspeed", td: `${result.windspeed} km/h`, tbody },
    { th: "Cloudcover", td: `${Math.round(result.cloudcover)}%`, tbody },
    { th: "Rainability", td: `${Math.round(result.precipprob)}%`, tbody },
    { th: "Solar radiation", td: `${result.solarradiation} W/m2`, tbody },
  ];
  trows.forEach((element) => {
    createTableRow(element);
  });

  table.appendChild(tbody);

  div.appendChild(table);

  div.appendChild(createCloseButton())

  content.appendChild(div);
}
