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

function handleLiRemove(key, currentArray, parentUpdateFunc) {
  const newArray = currentArray.filter((li) => key !== li.key);

  parentUpdateFunc(newArray);
}

export { handleChildUpdates, handleLiUpdates, handleLiRemove };
