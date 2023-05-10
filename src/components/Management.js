import { Component } from 'react';

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
    return (
      <>
        <button type="button" disabled={currentEdits !== 0} onClick={handleLoadDummyData}>Load Dummy</button>
        <button type="button" disabled={currentEdits !== 0} onClick={handleLoadDefaultData}>Load Empty</button>
        <button type="button" disabled={currentEdits !== 0} onClick={handleLoadSavedData}>Load Saved</button>
        <button type="button" disabled={currentEdits !== 0} onClick={handleSaveData}>Save Current</button>
        <button type="button" disabled={currentEdits !== 0} onClick={handleClearSavedData}>Clear Saved</button>
        {currentEdits !== 0
        && <span>Youre currently editing fields, update all exit edit mode</span>}
      </>
    );
  }
}
