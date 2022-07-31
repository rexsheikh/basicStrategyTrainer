import cardBack from "./assets/card_back.png";

function randIdx(arr) {
  let randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

function dealNCards(arr, n, hide) {
  let res = [];
  if (hide === true) {
    res.push({
      name: "dealerDown",
      img: cardBack,
      score: 0,
    });
  }
  for (let i = 0; i < n; i++) {
    let card = randIdx(arr);
    res.push(card);
  }
  return res;
}
export { randIdx, dealNCards };
