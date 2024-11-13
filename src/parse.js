export default async function (response) {
  const json = await response.json();
  const currentDay = json.days[0];
  const temp = currentDay.temp;
  const precipprob = currentDay.precipprob;
  const cloudcover = currentDay.cloudcover;
  const conditions = currentDay.conditions;
  return { temp, precipprob, cloudcover, conditions };
}
