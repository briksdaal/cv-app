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

function getDataWithKeys(data, getNextId) {
  return Object.fromEntries(Object.entries(data).map((entry) => {
    let value = entry[1];
    if (Array.isArray(value)) {
      value = value.map((info) => ({
        key: getNextId(),
        ...getDataWithKeys({ ...info }, getNextId),
      }));
    }
    return [entry[0], value];
  }));
}

export {
  handleChildUpdates, handleLiUpdates, handleLiRemove, getDataWithKeys,
};
