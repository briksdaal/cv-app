import { Component } from 'react';

export default class Management extends Component {
  constructor(props) {
    super(props);

    this.handleDummyDataLoad = this.handleDummyDataLoad.bind(this);
    this.handleEmptyDataLoad = this.handleEmptyDataLoad.bind(this);
    this.handleSaveData = this.handleSaveData.bind(this);
    this.handleLoadData = this.handleLoadData.bind(this);
    this.handleClearSaved = this.handleClearSaved.bind(this);
    this.handleSame = this.handleSame.bind(this);
  }

  handleDummyDataLoad() {
    const { update, dummyData } = this.props;
    update(dummyData);
  }

  handleEmptyDataLoad() {
    const { update, defaultData } = this.props;
    update(defaultData);
  }

  handleSaveData() {
    const { update, getCVObj } = this.props;
    const savedData = getCVObj();
    savedData.newData = true;
    localStorage.setItem('savedData', JSON.stringify(savedData));
    update(savedData);
  }

  handleLoadData() {
    const { update } = this.props;
    let loadedData = JSON.parse(localStorage.getItem('savedData'));
    if (!loadedData) {
      loadedData = {};
    }
    loadedData.newData = true;
    update(loadedData);
  }

  handleClearSaved() {
    const { update } = this.props;
    localStorage.clear();
    update({ newData: true });
  }

  handleSame() {
    const { update, getCVObj } = this.props;
    update(getCVObj());
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleDummyDataLoad}>Load Dummy</button>
        <button type="button" onClick={this.handleEmptyDataLoad}>Load Empty</button>
        <button type="button" onClick={this.handleLoadData}>Load Saved</button>
        <button type="button" onClick={this.handleSaveData}>Save Current</button>
        <button type="button" onClick={this.handleClearSaved}>Clear Saved</button>
        <button type="button" onClick={this.handleSame}>Same State</button>
      </>
    );
  }
}
