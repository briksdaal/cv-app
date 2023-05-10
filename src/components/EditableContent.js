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
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleEdit() {
    const { text, handleEnableEditMode } = this.props;
    this.setState({
      editMode: true,
      inputVal: text,
    });
    handleEnableEditMode();
  }

  handleUpdate() {
    const { hadnleGlobalStateUpdate, field } = this.props;
    const { inputVal } = this.state;

    this.setState({ editMode: false });
    hadnleGlobalStateUpdate(inputVal);
  }

  render() {
    const { editMode, inputVal } = this.state;
    const {
      text,
      editDisabled,
      handleEnableEditMode,
    } = this.props;

    return (
      (editMode && !editDisabled)
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
        )
    );
  }
}
