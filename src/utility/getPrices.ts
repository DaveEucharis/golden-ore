export async function getPrices() {
  const sheetID = "11BwlqhO4_cmXpPan13DzBzRyn1dBlCM0u7Fj-5ReMDk";
  const link = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv&sheet=Prices`;

  try {
    const resp = await fetch(link);
    const data = await resp.text();

    const motorPrice = getPriceFromData(data, 1);
    const carPrice = getPriceFromData(data, 2);

    return { motorPrice, carPrice };
  } catch (err) {
    console.log(err);

    return null;
  }
}

function getPriceFromData(data: string, index: number) {
  return data.split("\n")[index].split(",")[1].replaceAll('"', "");
}
