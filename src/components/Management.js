import { Component } from 'react';
import './styles/Management.css';

export default class Management extends Component {
  render() {
    const {
      currentEdits,
      handleLoadDummyData,
      handleLoadDefaultData,
      handleLoadSavedData,
      handleSaveData,
      handleClearSavedData,
    } = this.props;

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
}
