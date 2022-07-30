function randIdx(arr) {
  let randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

function firstDeal(arr) {
  let res = [];
  for (let i = 0; i < 4; i++) {
    let card = randIdx(arr);
    res.push(card);
  }
  return res;
}

export { randIdx, firstDeal };
