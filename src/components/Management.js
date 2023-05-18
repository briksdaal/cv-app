import { useEffect } from 'react';
import './styles/Management.css';

export default function Management({
  data,
  setData,
  defaultData,
  dummyData,
  currentEdits,
}) {
  function handleLoadDummyData() {
    setData(dummyData);
  }

  function handleLoadDefaultData() {
    setData(defaultData);
  }

  function handleLoadSavedData() {
    const loadedData = JSON.parse(localStorage.getItem('savedData'));
    if (loadedData) {
      setData(loadedData);
    }
  }

  function handleSaveData() {
    localStorage.setItem('savedData', JSON.stringify(data));
  }

  function handleClearSavedData() {
    localStorage.clear();
  }

  useEffect(() => {
    handleClearSavedData();
  }, []);

  const editMode = currentEdits !== 0;

  return (
    <>
      <h2>{editMode ? 'Edit Mode' : 'Preview Mode'}</h2>
      <button type="button" disabled={editMode} onClick={handleLoadDummyData}>Load Dummy</button>
      <button type="button" disabled={editMode} onClick={handleLoadDefaultData}>Load Empty</button>
      <button type="button" disabled={editMode} onClick={handleLoadSavedData}>Load Saved</button>
      <button type="button" disabled={editMode} onClick={handleSaveData}>Save Current</button>
      <button type="button" disabled={editMode} onClick={handleClearSavedData}>Clear Saved</button>
    </>
  );
}
