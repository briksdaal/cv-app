import { Component } from 'react';
import ActionButton from './ActionButton';
import './styles/EditableContent.css';

export default class EditableContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleEdit() {
    const { text, changeCurrentEdits, changeExperienceEdits } = this.props;
    this.setState({
      editMode: true,
      inputVal: text,
    });
    changeCurrentEdits(1);
    if (changeExperienceEdits) {
      changeExperienceEdits(1);
    }
  }

  handleUpdate() {
    const { handleGlobalStateUpdate, changeCurrentEdits, changeExperienceEdits } = this.props;
    const { inputVal } = this.state;
    changeCurrentEdits(-1);
    if (changeExperienceEdits) {
      changeExperienceEdits(-1);
    }
    this.setState({ editMode: false });
    handleGlobalStateUpdate(inputVal);
  }

  handleRemove() {
    const { editMode } = this.state;
    const { changeCurrentEdits, handleLiRemove, changeExperienceEdits } = this.props;
    if (editMode) {
      changeCurrentEdits(-1);
      if (changeExperienceEdits) {
        changeExperienceEdits(-1);
      }
    }
    handleLiRemove();
  }

  render() {
    const {
      editMode,
      inputVal,
    } = this.state;
    const {
      children,
      className,
      textarea,
      handleLiRemove,
    } = this.props;

    const classArray = ['editable'];

    if (className) {
      classArray.push(className);
    }
    if (handleLiRemove) {
      classArray.push('removable');
    }
    if (editMode) {
      classArray.push('in-edit');
    }

    return (
      <div className={classArray.join(' ')}>
        { editMode
          ? (
            <>
              {textarea
                ? <textarea value={inputVal} onChange={this.handleChange} />
                : <input type="text" value={inputVal} onChange={this.handleChange} />}
              <ActionButton
                onClick={this.handleUpdate}
                type="check"
              />
            </>
          )
          : (
            <>
              { children }
              <ActionButton
                onClick={this.handleEdit}
                type="edit"
              />
            </>
          )}
        {handleLiRemove
              && (
              <ActionButton
                onClick={this.handleRemove}
                type="remove"
              />
              )}
      </div>
    );
  }
}
