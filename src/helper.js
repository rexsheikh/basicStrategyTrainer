function randIdx(arr) {
  let randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

function dealNCards(arr, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let card = randIdx(arr);
    res.push(card);
  }
  return res;
}

export { randIdx, dealNCards };
