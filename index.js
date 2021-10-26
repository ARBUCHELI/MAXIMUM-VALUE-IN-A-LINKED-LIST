function findMax(list) {
  let current = list.head;
  let max = current.data;
  while (current.getNextNode() !== null) {
    current = current.getNextNode();
    let val = current.data;
    if (val > max) {
      max = val;
    }
  }
  return max;
}
