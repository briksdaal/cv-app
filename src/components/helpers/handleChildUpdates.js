export default function handleChildUpdates(currentDataObj, newChild, field, parentUpdateFunc) {
  const newData = {
    ...currentDataObj,
  };
  newData[field] = newChild;

  parentUpdateFunc(newData);
}
