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

function isValidSummonersRiftItem(item) {
  const isAvailableOnSummonersRift = item.maps?.["11"] === true;
  const hasIcon = Boolean(item.image?.full);
  const isPurchasable = item.gold?.purchasable === true;
  const isNotConsumed = item.consumed !== true;
  const isInStore = item.inStore !== false;
  const isNotChampionSpecific = !item.requiredChampion;

  return isAvailableOnSummonersRift && hasIcon && isPurchasable && isNotConsumed && isInStore && isNotChampionSpecific;
}

function isFinalItem(item) {
  return !item.into || item.into.length === 0;
}

function hasRecipe(item) {
  return Array.isArray(item.from) && item.from.length > 0;
}

function isBootItem(item) {
  return item.tags?.includes("Boots");
}

function isLegendarySummonersRiftItem(item) {
  const hasValidGold = item.gold?.total >= 2000;

  const blockedTags = ["Consumable", "Trinket", "Boots", "Jungle", "Lane"];

  const hasBlockedTag = item.tags?.some((tag) => blockedTags.includes(tag));

  return isValidSummonersRiftItem(item) && hasValidGold && isFinalItem(item) && hasRecipe(item) && !hasBlockedTag;
}

function isSummonersRiftBoot(item) {
  return isValidSummonersRiftItem(item) && isBootItem(item) && isFinalItem(item);
}

export function normalizeItems(itemsData, version) {
  const items = [];
  const boots = [];

  Object.entries(itemsData.data).forEach(([id, item]) => {
    const normalizedItem = {
      id,
      name: item.name,
      description: item.description,
      icon: `${BASE_URL}/cdn/${version}/img/item/${item.image.full}`,
      gold: item.gold,
      tags: item.tags,
      maps: item.maps,
      into: item.into,
      from: item.from,
    };

    if (isLegendarySummonersRiftItem(item)) {
      items.push(normalizedItem);
    }

    if (isSummonersRiftBoot(item)) {
      boots.push(normalizedItem);
    }
  });

  return {
    items,
    boots,
  };
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

  const normalizedItems = normalizeItems(itemsData, version);

  return {
    version,
    champions: normalizeChampions(championsData, version),
    spells: normalizeSpells(spellsData, version),
    items: normalizedItems.items,
    boots: normalizedItems.boots,
    runePages: normalizeRunePages(runesData),
  };
}
