import { Component } from 'react';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { GrFormCheckmark } from 'react-icons/gr';
import { ImPlus } from 'react-icons/im';
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
      btn = <ImPlus />;
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
