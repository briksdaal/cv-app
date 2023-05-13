import { Component } from 'react';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import { MdEdit, MdAdd } from 'react-icons/md';
import { GrFormCheckmark } from 'react-icons/gr';
import './styles/ActionButton.css';

export default class Button extends Component {
  render() {
    const {
      type,
      onClick,
      children,
    } = this.props;

    let btn = 'Click';

    if (type === 'check') {
      btn = <GrFormCheckmark />;
    } else if (type === 'add') {
      btn = <MdAdd />;
    } else if (type === 'remove') {
      btn = <FaTrashAlt />;
    } else if (type === 'edit') {
      btn = <MdEdit />;
    }

    return (
      <button
        type="button"
        className={`action-button ${type}`}
        onClick={onClick}
      >
        { btn }
      </button>
    );
  }
}
