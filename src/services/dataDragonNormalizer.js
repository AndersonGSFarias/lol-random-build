const BASE_URL = "https://ddragon.leagueoflegends.com";

export function normalizeChampions(championsData, version) {
  return Object.values(championsData.data).map((champion) => ({
    id: champion.id,
    key: champion.key,
    name: champion.name,
    title: champion.title,
    icon: `${BASE_URL}/cdn/${version}/img/champion/${champion.image.full}`,
    splash: `${BASE_URL}/cdn/img/champion/splash/${champion.id}_0.jpg`,
  }));
}

export function normalizeSpells(spellsData, version) {
  return Object.values(spellsData.data)
    .filter((spell) => {
      const isSummonersRiftSpell = spell.modes?.includes("CLASSIC");

      return isSummonersRiftSpell;
    })
    .map((spell) => ({
      id: spell.id,
      key: spell.key,
      name: spell.name,
      description: spell.description,
      icon: `${BASE_URL}/cdn/${version}/img/spell/${spell.image.full}`,
      modes: spell.modes,
    }));
}

function isLegendarySummonersRiftItem(item) {
  const isAvailableOnSummonersRift = item.maps?.["11"] === true;

  const hasIcon = Boolean(item.image?.full);

  const hasValidGold = item.gold?.total >= 2000;

  const isPurchasable = item.gold?.purchasable === true;

  const isFinalItem = !item.into || item.into.length === 0;

  const hasRecipe = Array.isArray(item.from) && item.from.length > 0;

  const isNotConsumed = item.consumed !== true;

  const isInStore = item.inStore !== false;

  const isNotChampionSpecific = !item.requiredChampion;

  const blockedTags = ["Consumable", "Trinket", "Boots", "Jungle", "Lane"];

  const hasBlockedTag = item.tags?.some((tag) => blockedTags.includes(tag));

  return isAvailableOnSummonersRift && hasIcon && hasValidGold && isPurchasable && isFinalItem && hasRecipe && isNotConsumed && isInStore && isNotChampionSpecific && !hasBlockedTag;
}

export function normalizeItems(itemsData, version) {
  return Object.entries(itemsData.data)
    .filter(([, item]) => isLegendarySummonersRiftItem(item))
    .map(([id, item]) => ({
      id,
      name: item.name,
      description: item.description,
      icon: `${BASE_URL}/cdn/${version}/img/item/${item.image.full}`,
      gold: item.gold,
      tags: item.tags,
      maps: item.maps,
      into: item.into,
      from: item.from,
    }));
}

export function normalizeRunePages(runesData) {
  return runesData.map((runeTree) => ({
    id: runeTree.id,
    treeName: runeTree.name,
    treeIcon: `${BASE_URL}/cdn/img/${runeTree.icon}`,

    keystones: runeTree.slots[0].runes.map((rune) => ({
      id: rune.id,
      name: rune.name,
      icon: `${BASE_URL}/cdn/img/${rune.icon}`,
    })),

    slots: runeTree.slots.slice(1).map((slot) =>
      slot.runes.map((rune) => ({
        id: rune.id,
        name: rune.name,
        icon: `${BASE_URL}/cdn/img/${rune.icon}`,
      })),
    ),
  }));
}

export function normalizeDataDragonData(dataDragonData) {
  const { version, championsData, spellsData, itemsData, runesData } = dataDragonData;

  return {
    version,
    champions: normalizeChampions(championsData, version),
    spells: normalizeSpells(spellsData, version),
    items: normalizeItems(itemsData, version),
    runePages: normalizeRunePages(runesData),
  };
}
