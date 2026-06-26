import { getRandomItem, getRandomItems } from "./random";

export function generatePrimaryRune(runePages) {
  const randomTree = getRandomItem(runePages);

  const randomKeystone = getRandomItem(randomTree.keystones);

  const selectedRunes = randomTree.slots.map((slot) => {
    return getRandomItem(slot);
  });

  return {
    treeId: randomTree.id,
    treeName: randomTree.treeName,
    treeIcon: randomTree.treeIcon,
    keystone: randomKeystone,
    runes: selectedRunes,
  };
}

export function generateSecondaryRune(runePages, primaryTreeId) {
  const availableTrees = runePages.filter((tree) => {
    return tree.id !== primaryTreeId;
  });

  const randomTree = getRandomItem(availableTrees);

  const selectedSlots = getRandomItems(randomTree.slots, 2);

  const selectedRunes = selectedSlots.map((slot) => {
    return getRandomItem(slot);
  });

  return {
    treeId: randomTree.id,
    treeName: randomTree.treeName,
    treeIcon: randomTree.treeIcon,
    runes: selectedRunes,
  };
}
