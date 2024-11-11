export default async function (response) {
  const json = await response.json();
  const description = json.description;
  const temp = json.days[0]["temp"];
  return { description, temp };
}
