import { Component } from 'react';
import EditableContent from './EditableContent';
import { handleChildUpdates } from './helpers/helperFunctions';

export default class Li extends Component {
  render() {
    const {
      liData,
      updateLi,
      changeCurrentEdits,
    } = this.props;
    const liDataArr = Object.entries(liData).filter(([key, val]) => key !== 'key');
    return (
      <li />
    );
  }
}
