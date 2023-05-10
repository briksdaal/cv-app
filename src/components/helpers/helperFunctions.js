function handleChildUpdates(currentDataObj, newChild, field, parentUpdateFunc) {
  const newData = {
    ...currentDataObj,
  };
  newData[field] = newChild;

  parentUpdateFunc(newData);
}

function handleLiUpdates(key, currentArray, newChild, field, parentUpdateFunc) {
  const newArray = currentArray.map((li) => {
    if (key === li.key) {
      const newLi = { ...li };
      newLi[field] = newChild;
      return newLi;
    }
    return li;
  });
  parentUpdateFunc(newArray);
}

export { handleChildUpdates, handleLiUpdates };
