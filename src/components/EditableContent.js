import { Component } from 'react';

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
      text,
      handleLiRemove,
    } = this.props;

    return (
      <>
        { editMode
          ? (
            <>
              <input type="text" value={inputVal} onChange={this.handleChange} />
              <button type="button" onClick={this.handleUpdate}>Update</button>
            </>
          )
          : (
            <>
              { text }
              <button type="button" onClick={this.handleEdit}>Edit</button>
            </>
          )}
        {handleLiRemove && <button type="button" onClick={this.handleRemove}>Remove</button>}
      </>
    );
  }
}
