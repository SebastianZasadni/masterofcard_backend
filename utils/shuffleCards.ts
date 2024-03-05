import Card from "../models/card";

const shuffleCards = async (numberOfPlayers: number) => {
  const cards = await Card.find({});
  const compareRandom = () => {
    return Math.random() - 0.5;
  };
  const shuffledCards = cards.sort(compareRandom);

  if (numberOfPlayers === 2) {
    const firstPileOfCards = shuffledCards
      .slice(0, 12)
      .sort((a, b) => (b.cardId ?? 0) - (a.cardId ?? 0));
    const secondPileOfCards = shuffledCards
      .slice(12, 24)
      .sort((a, b) => (b.cardId ?? 0) - (a.cardId ?? 0));

    return { firstPileOfCards, secondPileOfCards };
  }
  if (numberOfPlayers === 3) {
    const firstPileOfCards = shuffledCards
      .slice(0, 8)
      .sort((a, b) => (b.cardId ?? 0) - (a.cardId ?? 0));
    const secondPileOfCards = shuffledCards
      .slice(8, 16)
      .sort((a, b) => (b.cardId ?? 0) - (a.cardId ?? 0));
    const thirdPileOfCards = shuffledCards
      .slice(16, 24)
      .sort((a, b) => (b.cardId ?? 0) - (a.cardId ?? 0));
    return { firstPileOfCards, secondPileOfCards, thirdPileOfCards };
  }
  if (numberOfPlayers === 4) {
    const firstPileOfCards = shuffledCards
      .slice(0, 6)
      .sort((a, b) => (b.cardId ?? 0) - (a.cardId ?? 0));
    const secondPileOfCards = shuffledCards
      .slice(6, 12)
      .sort((a, b) => (b.cardId ?? 0) - (a.cardId ?? 0));
    const thirdPileOfCards = shuffledCards
      .slice(12, 18)
      .sort((a, b) => (b.cardId ?? 0) - (a.cardId ?? 0));
    const fourthPileOfCards = shuffledCards
      .slice(18, 24)
      .sort((a, b) => (b.cardId ?? 0) - (a.cardId ?? 0));
    return {
      firstPileOfCards,
      secondPileOfCards,
      thirdPileOfCards,
      fourthPileOfCards,
    };
  }
};

export default shuffleCards;
