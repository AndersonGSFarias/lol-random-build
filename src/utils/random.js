export function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
}

export function getRandomItems(array, quantity) {
  return shuffleArray(array).slice(0, quantity);
}
