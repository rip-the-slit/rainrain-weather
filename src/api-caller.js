export default async function (location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TNATRMXJ7EJSUBD23TSKSELTK`;
  const request = await fetch(url, { mode: "cors" });
  if (request.ok) {
    return request;
  }
  throw new Error(request.status);
}
