const BASE_URL = "https://ddragon.leagueoflegends.com";

export async function getLatestVersion() {
  const response = await fetch(`${BASE_URL}/api/versions.json`);

  if (!response.ok) {
    throw new Error("Erro ao buscar a versão mais recente do Data Dragon.");
  }

  const versions = await response.json();

  return versions[0];
}

export async function getDataDragonData() {
  const version = await getLatestVersion();
  const language = "pt_BR";

  const [championsResponse, spellsResponse, itemsResponse, runesResponse] = await Promise.all([fetch(`${BASE_URL}/cdn/${version}/data/${language}/champion.json`), fetch(`${BASE_URL}/cdn/${version}/data/${language}/summoner.json`), fetch(`${BASE_URL}/cdn/${version}/data/${language}/item.json`), fetch(`${BASE_URL}/cdn/${version}/data/${language}/runesReforged.json`)]);

  if (!championsResponse.ok || !spellsResponse.ok || !itemsResponse.ok || !runesResponse.ok) {
    throw new Error("Erro ao buscar dados do Data Dragon.");
  }

  const championsData = await championsResponse.json();
  const spellsData = await spellsResponse.json();
  const itemsData = await itemsResponse.json();
  const runesData = await runesResponse.json();

  return {
    version,
    championsData,
    spellsData,
    itemsData,
    runesData,
  };
}
